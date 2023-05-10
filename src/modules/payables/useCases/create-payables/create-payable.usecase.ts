import { CustomError } from "../../../../errors/custom.error";
import { User } from "../../../users/entities/user.entity";
import { Seller } from "../../../sellers/entities/seller.entity";

import { ISellerRepository } from "../../../sellers/repositories/seller.repository";
import { Payables, StatusProps } from "../../entities/payable.entity";
import { IPayableRepository } from "../../repositories/payable.repository";
import { ICheckoutRepository } from "../../../checkouts/repositories/checkout.repository";


export type CreatePayableRequest = {
    status: StatusProps;
    payment_date: Date;
    type_payment: string;
    balance: number;
    sellerId: string;
    checkoutId:string;
}

export class CreatePayableUseCase {
    constructor(
        private payableRepository:IPayableRepository,
        private sellerRepository:ISellerRepository,
        private checkoutRepository: ICheckoutRepository
    ){}

    async execute(data:CreatePayableRequest){
        const payable = new Payables(data);


        const seller = await this.sellerRepository.findById(data.sellerId);
        const checkout = await this.checkoutRepository.findById(data.checkoutId)
    

        if(!seller){
            throw new CustomError('Seller does not exists!',400);
        }
       
        if(!checkout){
            throw new CustomError('Checkout does not exists!',400);
        }

        if(payable.type_payment='credit_card'){
            return payable.balance = payable.balance - (payable.balance * 0.5);
        }

        
        const checkoutCreated = await this.payableRepository.save(payable);
        return checkoutCreated
    }
}