import { CustomError } from "../../../../errors/custom.error";
import { User } from "../../../users/entities/user.entity";
import { Seller } from "../../../sellers/entities/seller.entity";

import { ISellerRepository } from "../../../sellers/repositories/seller.repository";
import { Payables, StatusProps } from "../../entities/payable.entity";
import { IPayableRepository } from "../../repositories/payable.repository";
import { ICheckoutRepository } from "../../../checkouts/repositories/checkout.repository";
import { add30Days } from "../../../../utils/date";
import { applyFee } from "../../../../utils/applyFee";


export type CreatePayableRequest = {
    id:string;
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
        data.payment_date = add30Days()
        data.balance = applyFee(data.balance,5)
       


        const seller = await this.sellerRepository.findById(data.sellerId);
        const checkout = await this.checkoutRepository.findById(data.checkoutId)
    

        if(!seller){
            throw new CustomError('Seller does not exists!',400);
        }
       
        if(!checkout){
            throw new CustomError('Checkout does not exists!',400);
        }

    

        console.log(data)
        const checkoutCreated = await this.payableRepository.save(data);
        return checkoutCreated
    }
}