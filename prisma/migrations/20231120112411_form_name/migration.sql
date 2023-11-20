/*
  Warnings:

  - Added the required column `formName` to the `formSchema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `formschema` ADD COLUMN `formName` VARCHAR(191) NOT NULL;
