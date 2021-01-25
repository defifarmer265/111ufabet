# Migration `20201203112243-register`

This migration has been generated at 12/3/2020, 6:22:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "BankAccount" DROP CONSTRAINT "BankAccount_bankAccId_fkey"

ALTER TABLE "Register" DROP CONSTRAINT "Register_registerId_fkey"

ALTER TABLE "Bank" DROP COLUMN "name",
DROP COLUMN "accountNumber",
ADD COLUMN     "nameShort" TEXT NOT NULL,
ADD COLUMN     "nameFull" TEXT NOT NULL

ALTER TABLE "BankAccount" DROP COLUMN "bankAccId",
DROP COLUMN "name",
ADD COLUMN     "bankId" INTEGER NOT NULL,
ADD COLUMN     "bankName" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL

ALTER TABLE "Register" DROP COLUMN "registerId",
ALTER COLUMN "bankAccountId" SET NOT NULL

ALTER TABLE "BankAccount" ADD FOREIGN KEY("bankId")REFERENCES "Bank"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201203105055-register..20201203112243-register
--- datamodel.dml
+++ datamodel.dml
@@ -2,40 +2,41 @@
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
   id              Int         @default(autoincrement()) @id
+  bankAccountId   Int
   phone           String      @unique
   firstName       String
   lastName        String?
   bonusId         Int
-  registerId      Int    
   lineId          String
   password        String
-  register        BankAccount  @relation("Register_BankAccount", fields: [registerId], references: [id])
+  bankAccount     BankAccount  @relation("Register_BankAccount", fields: [bankAccountId], references: [id])
   bonus           Bonus        @relation("Register_Bonus", fields: [bonusId], references: [id])
 }
 model BankAccount {
-  id             Int           @default(autoincrement()) @id
-  bankAccId      Int                 
-  name           String
+  id             Int           @default(autoincrement()) @id  
+  bankId         Int            
+  bankName       String 
+  number         String
   listBankAcc    Register[]   @relation("Register_BackAccount")
-  bank           Bank         @relation("BankAccount_Bank", fields: [bankAccId], references: [id])
+  bank           Bank         @relation("BankAccount_Bank", fields: [bankId], references: [id])
 }
 model Bank {
   id             Int           @default(autoincrement()) @id
-  name           String
-  accountNumber  Int
+  nameShort      String
+  nameFull       String
 }
 model Bonus {
   id               Int         @default(autoincrement()) @id
```


