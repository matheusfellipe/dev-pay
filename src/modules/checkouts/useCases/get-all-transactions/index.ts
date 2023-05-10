import { CheckoutPrismaRepository } from "../../repositories/implementations/checkout.prisma.repository";
import { GetAllCheckout } from "./get-all-transactions.controller";


const checkoutRepository = new CheckoutPrismaRepository()

const getAllCheckoutController = new GetAllCheckout(
    checkoutRepository
)

export {getAllCheckoutController}