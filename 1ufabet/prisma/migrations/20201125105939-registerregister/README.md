# Migration `20201125105939-registerregister`

This migration has been generated at 11/25/2020, 5:59:39 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Register" ALTER COLUMN "phone" SET DATA TYPE TEXT
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201125105643..20201125105939-registerregister
--- datamodel.dml
+++ datamodel.dml
@@ -2,18 +2,18 @@
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
   id              Int     @default(autoincrement()) @id
-  phone           Int
+  phone           String
   firstName       String
   lastName        String
   bankId          Int
   lineId          String
```


