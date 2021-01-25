# Migration `20201126034627-register`

This migration has been generated at 11/26/2020, 10:46:27 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Register" ALTER COLUMN "lastName" DROP NOT NULL
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201125105939-registerregister..20201126034627-register
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
@@ -13,9 +13,9 @@
 model Register {
   id              Int     @default(autoincrement()) @id
   phone           String
   firstName       String
-  lastName        String
+  lastName        String?
   bankId          Int
   lineId          String
   password        String
   bonus           String
```


