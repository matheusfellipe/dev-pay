import { Payables } from "../entities/payable.entity";
import {Payable as PayablePrisma, Seller as SellerPrisma,Checkout as CheckoutPrisma} from "@prisma/client";
import { PayableWithSellerDTO } from "../dto/payable.dto";

export class PayableMapper {
    static entityToPrisma = (payable:Payables):PayablePrisma=>{
        return {
            id:payable.id,
            balance:payable.balance,
            status:payable.status,
            type_payment:payable.type_payment,
            payment_date:payable.payment_date,
            sellerId:payable.sellerId,
            checkoutId:payable.checkoutId

        }
    }

    static prismaToEntity = (payable:PayablePrisma):Payables =>{
        return {
            id:payable.id,
            balance:payable.balance as number,
            status:payable.status,
            type_payment:payable.type_payment,
            payment_date:payable.payment_date,
            checkoutId:payable.checkoutId,
            sellerId:payable.sellerId
        }
    }

    static prismaToEntityIncludesCheckoutAndSeller = (payable:PayablePrisma & {checkout:CheckoutPrisma}&{seller:SellerPrisma}):PayableWithSellerDTO=>{
        return{
            id:payable.id,
            balance:payable.balance as number,
            status:payable.status,
            type_payment:payable.type_payment,
            payment_date:payable.payment_date,
            checkoutId:payable.checkoutId,
            sellerId:payable.sellerId,
           checkout:{
                description:payable.checkout.description
            },
            seller:{
                name:payable.seller.name
            },
          
        }
    }
}