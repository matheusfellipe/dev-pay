import { Checkout } from "../entities/checkout.entity";
import {Checkout as CheckoutPrisma, User as UserPrisma, Seller as SellerPrisma,Prisma} from "@prisma/client";
import { CheckoutWithUserAndSellerDTO } from "../dto/checkout.dto";

export class CheckoutMapper {

    static entityToPrisma = (checkout:Checkout):CheckoutPrisma=>{
        return {
            id:checkout.id,
            price:new Prisma.Decimal(checkout.price ),
            description:checkout.description,
            card_number:checkout.card_number,
            card_owner:checkout.card_owner,
            card_expiring_date:checkout.card_expiring_date,
            userId:checkout.userId,
            sellerId:checkout.sellerId,
            createdAt:checkout.createdAt

        }
    }
   
    static prismaToEntity = (checkout:CheckoutPrisma):Checkout =>{
        return {
            id:checkout.id,
            price:Number(checkout.price),
            description:checkout.description,
            card_number:checkout.card_number,
            card_owner:checkout.card_owner,
            card_expiring_date:checkout.card_expiring_date,
            userId:checkout.userId,
            sellerId:checkout.sellerId,
            createdAt:checkout.createdAt
        }
    }

    static prismaToEntityIncludesUserAndSeller = (checkout:CheckoutPrisma & {user:UserPrisma}&{seller:SellerPrisma}):CheckoutWithUserAndSellerDTO=>{
        return{
            id:checkout.id,
            price:Number(checkout.price),
            description:checkout.description,
            card_number:checkout.card_number,
            card_owner:checkout.card_owner,
            card_expiring_date:checkout.card_expiring_date,
            userId:checkout.userId,
            user:{
                name:checkout.user.name
            },
            seller:{
                name:checkout.seller.name
            },
            sellerId:checkout.sellerId,
            createdAt:checkout.createdAt
        }
    }
}