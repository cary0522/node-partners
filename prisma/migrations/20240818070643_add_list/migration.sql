-- CreateTable
CREATE TABLE `AppearanceList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `appearance` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TraitList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trait` VARCHAR(191) NOT NULL,
    `feedback` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
