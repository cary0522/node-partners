/*
  Warnings:

  - You are about to drop the column `woner` on the `UserOptions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `UserOptions` DROP FOREIGN KEY `UserOptions_woner_fkey`;

-- AlterTable
ALTER TABLE `UserOptions` DROP COLUMN `woner`,
    ADD COLUMN `owner` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `UserOptions` ADD CONSTRAINT `UserOptions_owner_fkey` FOREIGN KEY (`owner`) REFERENCES `Member`(`token`) ON DELETE SET NULL ON UPDATE CASCADE;
