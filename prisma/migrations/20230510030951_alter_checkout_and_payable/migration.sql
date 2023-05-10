/*
  Warnings:

  - You are about to alter the column `price` on the `Checkout` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `balance` on the `Payable` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - Made the column `price` on table `Checkout` required. This step will fail if there are existing NULL values in that column.
  - Made the column `balance` on table `Payable` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Checkout" ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Payable" ALTER COLUMN "balance" SET NOT NULL,
ALTER COLUMN "balance" SET DATA TYPE DECIMAL(65,30);
