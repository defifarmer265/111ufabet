# Migration `20201203105055-register`

This migration has been generated at 12/3/2020, 5:50:55 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Register" DROP CONSTRAINT "Register_bankId_fkey"

ALTER TABLE "Bank" DROP COLUMN "code",
ADD COLUMN     "accountNumber" INTEGER NOT NULL

ALTER TABLE "Register" DROP COLUMN "bankId",
ADD COLUMN     "registerId" INTEGER NOT NULL,
ADD COLUMN     "bankAccountId" INTEGER

CREATE TABLE "BankAccount" (
"id" SERIAL,
    "bankAccId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

ALTER TABLE "BankAccount" ADD FOREIGN KEY("bankAccId")REFERENCES "Bank"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "Register" ADD FOREIGN KEY("registerId")REFERENCES "BankAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "Register" ADD FOREIGN KEY("bankAccountId")REFERENCES "BankAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201201025437-register..20201203105055-register
--- datamodel.dml
+++ datamodel.dml
@@ -2,34 +2,75 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model Register {
-  id              Int     @default(autoincrement()) @id
-  phone           String  @unique
+  id              Int         @default(autoincrement()) @id
+  phone           String      @unique
   firstName       String
   lastName        String?
-  bankId          Int
   bonusId         Int
+  registerId      Int    
   lineId          String
   password        String
-  bonus           Bonus   @relation("Register_Bonus", fields: [bonusId], references: [id])
-  bank            Bank    @relation("Register_Bank", fields: [bankId], references: [id])
+  register        BankAccount  @relation("Register_BankAccount", fields: [registerId], references: [id])
+  bonus           Bonus        @relation("Register_Bonus", fields: [bonusId], references: [id])
 }
+model BankAccount {
+  id             Int           @default(autoincrement()) @id
+  bankAccId      Int                 
+  name           String
+  listBankAcc    Register[]   @relation("Register_BackAccount")
+  bank           Bank         @relation("BankAccount_Bank", fields: [bankAccId], references: [id])
+}
+
 model Bank {
-  id               Int     @default(autoincrement()) @id
-  code             String  
-  name             String  
+  id             Int           @default(autoincrement()) @id
+  name           String
+  accountNumber  Int
 }
-model Bonus{
-  id               Int     @default(autoincrement()) @id
+model Bonus {
+  id               Int         @default(autoincrement()) @id
   accept_condition String 
-}
+}
+
+
+// model Register {
+//   id              Int         @default(autoincrement()) @id
+//   phone           String      @unique
+//   firstName       String
+//   lastName        String?
+//   bankId          Int
+//   bonusId         Int
+//   lineId          String
+//   password        String
+//   bonus           Bonus       @relation("Register_Bonus", fields: [bonusId], references: [id])
+//   bank            Bank        @relation("Register_Bank", fields: [bankId], references: [id])
+// }
+
+// model BankAccount {
+//   id              Int         @default(autoincrement()) @id   
+//   code            String  
+//   name            String  
+//   registerId      Int
+//   bankId          Int
+//   // bank            Register    @relation("BankAccount_Register", fields:[bankId], references:[id])
+//   register        Register    @relation("BankAccount_Register", fields:[registerId], references:[id])
+//   list            Register[]  @relation("Register_Bank")
+// }
+
+// model Bank {
+//   id              Int         @default(autoincrement()) @id
+//   code            String  
+//   name            String  
+//   list            Register[]  @relation("Register_Bank")
+// }
+
```


