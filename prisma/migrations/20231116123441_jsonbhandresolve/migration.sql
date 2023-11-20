/*
  Warnings:

  - You are about to alter the column `form` on the `formschema` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `formschema` MODIFY `form` JSON NOT NULL;
