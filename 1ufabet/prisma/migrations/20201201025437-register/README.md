# Migration `20201201025437-register`

This migration has been generated at 12/1/2020, 9:54:37 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Register" DROP COLUMN "bonus",
ADD COLUMN     "bonusId" INTEGER NOT NULL

ALTER TABLE "Register" ADD FOREIGN KEY("bonusId")REFERENCES "Bonus"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201127094838-register..20201201025437-register
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
@@ -15,11 +15,12 @@
   phone           String  @unique
   firstName       String
   lastName        String?
   bankId          Int
+  bonusId         Int
   lineId          String
   password        String
-  bonus           String
+  Bonus           Bonus   @relation("Register_Bonus", fields: [bonusId], references: [id])
   bank            Bank    @relation("Register_Bank", fields: [bankId], references: [id])
 }
 model Bank {
```


