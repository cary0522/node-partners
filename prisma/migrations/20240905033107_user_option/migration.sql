-- CreateTable
CREATE TABLE `UserOptions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `appearanceList` JSON NOT NULL,
    `traitList` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
