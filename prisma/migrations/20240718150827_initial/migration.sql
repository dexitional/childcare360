-- CreateTable
CREATE TABLE `nursery` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `address` TEXT NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `email` VARCHAR(355) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `staff` (
    `id` VARCHAR(191) NOT NULL,
    `nurseryId` VARCHAR(191) NOT NULL,
    `reference` VARCHAR(50) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `position` VARCHAR(255) NOT NULL,
    `gender` TINYTEXT NOT NULL,
    `address` TEXT NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `email` VARCHAR(355) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `staff_reference_key`(`reference`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `child` (
    `id` VARCHAR(191) NOT NULL,
    `reference` VARCHAR(50) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `gender` TINYTEXT NOT NULL,
    `birthDate` DATE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `child_reference_key`(`reference`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `parent` (
    `id` VARCHAR(191) NOT NULL,
    `reference` VARCHAR(50) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `gender` TINYTEXT NOT NULL,
    `address` TEXT NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `email` VARCHAR(355) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `parent_reference_key`(`reference`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `parentChild` (
    `id` VARCHAR(191) NOT NULL,
    `parentId` VARCHAR(191) NOT NULL,
    `childId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activity` (
    `id` VARCHAR(191) NOT NULL,
    `activityTypeId` VARCHAR(191) NOT NULL,
    `childId` VARCHAR(191) NOT NULL,
    `period` DATETIME NOT NULL,
    `note` TEXT NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activityType` (
    `id` VARCHAR(191) NOT NULL,
    `nurseryId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medicalRecord` (
    `id` VARCHAR(191) NOT NULL,
    `childId` VARCHAR(191) NOT NULL,
    `allergies` VARCHAR(50) NOT NULL,
    `medication` VARCHAR(50) NOT NULL,
    `specialNeeds` VARCHAR(50) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `id` VARCHAR(191) NOT NULL,
    `childId` VARCHAR(191) NOT NULL,
    `method` VARCHAR(100) NOT NULL,
    `amount` FLOAT NOT NULL,
    `paidOn` DATETIME(3) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attendance` (
    `id` VARCHAR(191) NOT NULL,
    `childId` VARCHAR(191) NOT NULL,
    `checkIn` DATETIME(3) NOT NULL,
    `checkOut` DATETIME(3) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `staff` ADD CONSTRAINT `staff_nurseryId_fkey` FOREIGN KEY (`nurseryId`) REFERENCES `nursery`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `parentChild` ADD CONSTRAINT `parentChild_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `parent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `parentChild` ADD CONSTRAINT `parentChild_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `child`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activity` ADD CONSTRAINT `activity_activityTypeId_fkey` FOREIGN KEY (`activityTypeId`) REFERENCES `activityType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activity` ADD CONSTRAINT `activity_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `child`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `medicalRecord` ADD CONSTRAINT `medicalRecord_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `child`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `child`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attendance` ADD CONSTRAINT `attendance_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `child`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
