/*
  Warnings:

  - Added the required column `partnerName` to the `UserOptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `UserOptions` ADD COLUMN `partnerName` VARCHAR(191) NOT NULL;
