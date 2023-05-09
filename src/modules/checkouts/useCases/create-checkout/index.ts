import { SellerPrismaRepository } from "../../../sellers/repositories/implementations/seller.prisma.repository";
import { UserPrismaRepository } from "../../../users/repositories/implementations/user.prisma.repository";
import { CheckoutPrismaRepository } from "../../repositories/implementations/checkout.prisma.repository";
import { CreateCheckoutController } from "./create-checkout.controller";



const userRepository = new UserPrismaRepository()
const sellerRepository = new SellerPrismaRepository()
const checkoutRepository = new CheckoutPrismaRepository()

const createCheckoutController = new CreateCheckoutController(
    userRepository,
    sellerRepository,
    checkoutRepository
)

export {createCheckoutController}