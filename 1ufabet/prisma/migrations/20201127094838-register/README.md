# Migration `20201127094838-register`

This migration has been generated at 11/27/2020, 4:48:38 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "Bank.code_unique"

CREATE TABLE "Bonus" (
"id" SERIAL,
    "accept_condition" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "Register.phone_unique" ON "Register"("phone")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201127084917-register..20201127094838-register
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
@@ -23,7 +23,12 @@
 }
 model Bank {
   id              Int     @default(autoincrement()) @id
-  code            String  @unique
+  code            String  
   name            String  
 }
+
+model Bonus{
+  id               Int     @default(autoincrement()) @id
+  accept_condition String 
+}
```


