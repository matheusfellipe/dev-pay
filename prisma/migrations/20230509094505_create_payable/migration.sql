-- CreateEnum
CREATE TYPE "PayableStatus" AS ENUM ('pending', 'paid');

-- CreateTable
CREATE TABLE "Payable" (
    "id" TEXT NOT NULL,
    "status" "PayableStatus" NOT NULL DEFAULT 'pending',
    "payment_date" TIMESTAMP(3) NOT NULL,
    "type_payment" TEXT NOT NULL,
    "balance" DOUBLE PRECISION,
    "sellerId" TEXT NOT NULL,
    "checkoutId" TEXT NOT NULL,

    CONSTRAINT "Payable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payable" ADD CONSTRAINT "Payable_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payable" ADD CONSTRAINT "Payable_checkoutId_fkey" FOREIGN KEY ("checkoutId") REFERENCES "Checkout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
