# Migration `20201204032331-register`

This migration has been generated at 12/4/2020, 10:23:31 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201203112243-register..20201204032331-register
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -18,19 +18,19 @@
   lastName        String?
   bonusId         Int
   lineId          String
   password        String
-  bankAccount     BankAccount  @relation("Register_BankAccount", fields: [bankAccountId], references: [id])
-  bonus           Bonus        @relation("Register_Bonus", fields: [bonusId], references: [id])
+  BankAccount     BankAccount  @relation("Register_BankAccount", fields: [bankAccountId], references: [id])
+  Bonus           Bonus        @relation("Register_Bonus", fields: [bonusId], references: [id])
 }
 model BankAccount {
   id             Int           @default(autoincrement()) @id  
-  bankId         Int            
-  bankName       String 
+  bankId         Int
+  bankName       String
   number         String
-  listBankAcc    Register[]   @relation("Register_BackAccount")
-  bank           Bank         @relation("BankAccount_Bank", fields: [bankId], references: [id])
+  ListBankAcc    Register[]   @relation("Register_BankAccount")
+  Bank           Bank         @relation("BankAccount_Bank", fields: [bankId], references: [id])
 }
 model Bank {
   id             Int           @default(autoincrement()) @id
@@ -40,38 +40,5 @@
 model Bonus {
   id               Int         @default(autoincrement()) @id
   accept_condition String 
-}
-
-
-// model Register {
-//   id              Int         @default(autoincrement()) @id
-//   phone           String      @unique
-//   firstName       String
-//   lastName        String?
-//   bankId          Int
-//   bonusId         Int
-//   lineId          String
-//   password        String
-//   bonus           Bonus       @relation("Register_Bonus", fields: [bonusId], references: [id])
-//   bank            Bank        @relation("Register_Bank", fields: [bankId], references: [id])
-// }
-
-// model BankAccount {
-//   id              Int         @default(autoincrement()) @id   
-//   code            String  
-//   name            String  
-//   registerId      Int
-//   bankId          Int
-//   // bank            Register    @relation("BankAccount_Register", fields:[bankId], references:[id])
-//   register        Register    @relation("BankAccount_Register", fields:[registerId], references:[id])
-//   list            Register[]  @relation("Register_Bank")
-// }
-
-// model Bank {
-//   id              Int         @default(autoincrement()) @id
-//   code            String  
-//   name            String  
-//   list            Register[]  @relation("Register_Bank")
-// }
-
+}
```


