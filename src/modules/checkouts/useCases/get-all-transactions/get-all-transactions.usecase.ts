import { CustomError } from "../../../../errors/custom.error";
import { Checkout } from "../../entities/checkout.entity";
import { ICheckoutRepository } from "../../repositories/checkout.repository";


export type GetAllCheckoutRequest = {
   userId:string
   sellerId:string
}

export class GetAllTransactionsUseCase{
    constructor(private checkoutRepository: ICheckoutRepository){}

    async execute({userId,sellerId}:GetAllCheckoutRequest): Promise<Checkout[]>{
        const checkout = await this.checkoutRepository.getAllCheckouts(userId,sellerId)
        if(!checkout|| checkout.length === 0){
            throw new CustomError('Checkouts does not exists!',400);
        }
        return checkout
    }
}