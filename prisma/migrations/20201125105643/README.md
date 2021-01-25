# Migration `20201125105643`

This migration has been generated at 11/25/2020, 5:56:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Registers" DROP CONSTRAINT "Registers_bankId_fkey"

CREATE TABLE "Register" (
"id" SERIAL,
    "phone" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "bankId" INTEGER NOT NULL,
    "lineId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bonus" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

DROP TABLE "Registers"

ALTER TABLE "Register" ADD FOREIGN KEY("bankId")REFERENCES "Bank"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201124102937-register..20201125105643
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
-model Registers {
+model Register {
   id              Int     @default(autoincrement()) @id
-  phone           String
+  phone           Int
   firstName       String
   lastName        String
   bankId          Int
   lineId          String
```


