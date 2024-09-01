/*
  Warnings:

  - A unique constraint covering the columns `[account]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Member_account_key` ON `Member`(`account`);
