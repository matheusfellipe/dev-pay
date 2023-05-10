/*
  Warnings:

  - Changed the type of `payment_date` on the `Payable` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Payable" DROP COLUMN "payment_date",
ADD COLUMN     "payment_date" TIMESTAMP(3) NOT NULL;
