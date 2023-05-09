import { prismaClient } from "../../../../infra/database/prisma.config";
import { Seller } from "../../entities/seller.entity";
import { ISellerRepository } from "../seller.repository";

export class SellerPrismaRepository implements ISellerRepository {
    async findById(id: string):Promise<Seller|null>{
        return await prismaClient.seller.findUnique({
         where: {id:id}
        })
       }
        async findByEmail(email: string):Promise<Seller|undefined> {
        const seller = await prismaClient.seller
        .findFirst({
         where: {
           email,
         },
        })
        return seller || undefined
         }

   async save(data:Seller): Promise<Seller>{
 
        const seller = await prismaClient.seller.create({
          data: data,
        });
        return seller;
      
   }
}