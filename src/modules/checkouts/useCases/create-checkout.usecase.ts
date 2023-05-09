import { CustomError } from "../../../errors/custom.error";
import { User } from "../../users/entities/user.entity";
import { Seller } from "../../sellers/entities/seller.entity";
import { Checkout } from "../entities/checkout.entity";
import { IUserRepository } from "../../users/repositories/user.repository";
import { ICheckoutRepository } from "../repositories/checkout.repository";
import { ISellerRepository } from "../../sellers/repositories/seller.repository";

export type CreateCheckoutRequest = {
    price: number
    description: string
    card_number: string
    card_owner: string
    card_expiring_date: Date
    cvv: string
    createdAt:Date
}

export class CreateCheckoutUseCase {
    constructor(
        private useRepository:IUserRepository,
        private sellerRepository:ISellerRepository,
        private checkoutRepository: ICheckoutRepository
    ){}

    async execute(data:CreateCheckoutRequest){
        
    }
}