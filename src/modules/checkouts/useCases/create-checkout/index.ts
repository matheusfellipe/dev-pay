import { PayablePrismaRepository } from "../../../payables/repositories/implementations/payable.prisma.repository";
import { SellerPrismaRepository } from "../../../sellers/repositories/implementations/seller.prisma.repository";
import { UserPrismaRepository } from "../../../users/repositories/implementations/user.prisma.repository";
import { CheckoutPrismaRepository } from "../../repositories/implementations/checkout.prisma.repository";
import { CreateCheckoutController } from "./create-checkout.controller";



const userRepository = new UserPrismaRepository()
const sellerRepository = new SellerPrismaRepository()
const checkoutRepository = new CheckoutPrismaRepository()
const payableRepository = new PayablePrismaRepository()

const createCheckoutController = new CreateCheckoutController(
    userRepository,
    sellerRepository,
    checkoutRepository,
    payableRepository
)

export {createCheckoutController}