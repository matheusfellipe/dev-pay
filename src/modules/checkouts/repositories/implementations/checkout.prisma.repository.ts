import { prismaClient } from "../../../../infra/database/prisma.config";
import {  CheckoutWithUserAndSellerDTO } from "../../dto/checkout.dto";
import { Checkout } from "../../entities/checkout.entity";
import { CheckoutMapper } from "../../mapper/checkout.map";
import { ICheckoutRepository } from "../checkout.repository";



export class CheckoutPrismaRepository implements ICheckoutRepository{
   async  getAllCheckouts(userId: string, sellerId: string): Promise<Checkout[]> {
            const checkouts = await prismaClient.checkout.findMany({
              where: {
                OR: [
                  { userId },
                  { sellerId },
                ],
              },
              include: {
                user: true,
                seller: true,
              },
            });
        
            return CheckoutMapper.prismaToEntityIncludesUserAndSellerArray(checkouts);
          }
    
    async findByUserIdOrSellerID(userId: string, sellerId: string): Promise<CheckoutWithUserAndSellerDTO| null> {
     const checkout = await prismaClient.checkout.findFirst({
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