import { prismaClient } from "../../../../infra/database/prisma.config";
import { CheckoutListWithUserAndSellerDTO, CheckoutWithUserAndSellerDTO } from "../../dto/checkout.dto";
import { Checkout } from "../../entities/checkout.entity";
import { CheckoutMapper } from "../../mapper/checkout.map";
import { ICheckoutRepository } from "../checkout.repository";



export class CheckoutPrismaRepository implements ICheckoutRepository{
    async findByUserIdOrSellerID(userId: string, sellerId: string): Promise<CheckoutListWithUserAndSellerDTO| null> {
     const checkout = await prismaClient.checkout.findMany({
        where:{
            OR:[
                {
                    userId:{
                        equals:userId
                    }
                },
                {
                    sellerId:{
                        equals:sellerId
                    }
                }
            ]
        },
        include: {
            user: true,
            seller:true
          },
     })
     if(checkout){
        return CheckoutMapper.prismaToEntityIncludesUserAndSeller(checkout)
     }
     return null
    }
    async save(data: Checkout): Promise<Checkout> {
       const checkout = await prismaClient.checkout.create({
        data:CheckoutMapper.entityToPrisma(data),
       })
       return CheckoutMapper.prismaToEntity(checkout)
    }
   
    
}