-- CreateTable
CREATE TABLE `movie_lists` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(65) NOT NULL,
    `description` VARCHAR(191) NULL,
    `rating` INTEGER NOT NULL DEFAULT 0,
    `director` VARCHAR(191) NULL,

    UNIQUE INDEX `movie_lists_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
