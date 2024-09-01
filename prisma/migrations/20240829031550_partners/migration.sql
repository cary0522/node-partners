-- CreateTable
CREATE TABLE `Interactive` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `interactive_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partners` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `appearanceOne` VARCHAR(20) NOT NULL,
    `appearanceTwo` VARCHAR(20) NOT NULL,
    `appearanceThree` VARCHAR(20) NOT NULL,
    `appearanceFour` VARCHAR(20) NOT NULL,
    `feature` VARCHAR(50) NOT NULL,
    `price` INTEGER NOT NULL,
    `image` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
