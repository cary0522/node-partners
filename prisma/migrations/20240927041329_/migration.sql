/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - Made the column `token` on table `Member` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `woner` to the `UserOptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Member` MODIFY `token` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `UserOptions` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `woner` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Member_token_key` ON `Member`(`token`);

-- AddForeignKey
ALTER TABLE `UserOptions` ADD CONSTRAINT `UserOptions_woner_fkey` FOREIGN KEY (`woner`) REFERENCES `Member`(`token`) ON DELETE RESTRICT ON UPDATE CASCADE;
