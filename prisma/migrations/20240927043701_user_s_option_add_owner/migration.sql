-- DropForeignKey
ALTER TABLE `UserOptions` DROP FOREIGN KEY `UserOptions_woner_fkey`;

-- AlterTable
ALTER TABLE `UserOptions` MODIFY `woner` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `UserOptions` ADD CONSTRAINT `UserOptions_woner_fkey` FOREIGN KEY (`woner`) REFERENCES `Member`(`token`) ON DELETE SET NULL ON UPDATE CASCADE;
