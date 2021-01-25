# Migration `20201124102937-register`

This migration has been generated at 11/24/2020, 5:29:37 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Registers" (
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

CREATE TABLE "Bank" (
"id" SERIAL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "Bank.code_unique" ON "Bank"("code")

CREATE UNIQUE INDEX "Bank.name_unique" ON "Bank"("name")

ALTER TABLE "Registers" ADD FOREIGN KEY("bankId")REFERENCES "Bank"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201124102937-register
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,29 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Registers {
+  id              Int     @default(autoincrement()) @id
+  phone           Int
+  firstName       String
+  lastName        String
+  bankId          Int
+  lineId          String
+  password        String
+  bonus           String
+  bank            Bank    @relation("Register_Bank", fields: [bankId], references: [id])
+}
+
+model Bank {
+  id              Int     @default(autoincrement()) @id
+  code            String  @unique
+  name            String  @unique
+}
```


