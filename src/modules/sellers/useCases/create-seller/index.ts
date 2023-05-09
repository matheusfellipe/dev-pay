import { SellerPrismaRepository } from "../../repositories/implementations/seller.prisma.repository";
import { CreateSellerController } from "./create-seller.controller";


const sellerPrismaRepository = new SellerPrismaRepository();
const createSellerController = new CreateSellerController(
    sellerPrismaRepository,
   );


export { createSellerController };
