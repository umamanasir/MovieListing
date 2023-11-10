-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `directorId` INTEGER NOT NULL,
    `producerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Director` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Producer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_directorId_fkey` FOREIGN KEY (`directorId`) REFERENCES `Director`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_producerId_fkey` FOREIGN KEY (`producerId`) REFERENCES `Producer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
