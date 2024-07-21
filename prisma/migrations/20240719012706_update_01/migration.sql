/*
  Warnings:

  - You are about to alter the column `period` on the `activity` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the `activityType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `medicalRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `parentChild` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `activity` DROP FOREIGN KEY `activity_activityTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `medicalRecord` DROP FOREIGN KEY `medicalRecord_childId_fkey`;

-- DropForeignKey
ALTER TABLE `parentChild` DROP FOREIGN KEY `parentChild_childId_fkey`;

-- DropForeignKey
ALTER TABLE `parentChild` DROP FOREIGN KEY `parentChild_parentId_fkey`;

-- AlterTable
ALTER TABLE `activity` MODIFY `period` DATETIME NOT NULL;

-- DropTable
DROP TABLE `activityType`;

-- DropTable
DROP TABLE `medicalRecord`;

-- DropTable
DROP TABLE `parentChild`;

-- CreateTable
CREATE TABLE `parent_child` (
    `id` VARCHAR(191) NOT NULL,
    `parentId` VARCHAR(191) NOT NULL,
    `childId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activity_type` (
    `id` VARCHAR(191) NOT NULL,
    `nurseryId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medical_record` (
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

-- AddForeignKey
ALTER TABLE `parent_child` ADD CONSTRAINT `parent_child_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `parent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `parent_child` ADD CONSTRAINT `parent_child_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `child`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activity` ADD CONSTRAINT `activity_activityTypeId_fkey` FOREIGN KEY (`activityTypeId`) REFERENCES `activity_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `medical_record` ADD CONSTRAINT `medical_record_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `child`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
