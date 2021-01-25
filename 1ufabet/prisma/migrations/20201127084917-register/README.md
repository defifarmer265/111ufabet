# Migration `20201127084917-register`

This migration has been generated at 11/27/2020, 3:49:17 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "Bank.name_unique"

CREATE UNIQUE INDEX "Register.phone_unique" ON "Register"("phone")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201126034627-register..20201127084917-register
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
-  phone           String
+  phone           String  @unique
   firstName       String
   lastName        String?
   bankId          Int
   lineId          String
@@ -24,6 +24,6 @@
 model Bank {
   id              Int     @default(autoincrement()) @id
   code            String  @unique
-  name            String  @unique
+  name            String  
 }
```


