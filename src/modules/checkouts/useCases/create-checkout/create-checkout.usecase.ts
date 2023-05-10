import { CustomError } from "../../../../errors/custom.error";
import { User } from "../../../users/entities/user.entity";
import { Seller } from "../../../sellers/entities/seller.entity";
import { Checkout } from "../../entities/checkout.entity";
import { IUserRepository } from "../../../users/repositories/user.repository";
import { ICheckoutRepository } from "../../repositories/checkout.repository";
import { ISellerRepository } from "../../../sellers/repositories/seller.repository";


export type CreateCheckoutRequest = {
    price: number
    description: string
    card_number: string
    card_owner: string
    card_expiring_date: string
    cvv: string
    userId:string
    sellerId:string
    createdAt:Date
}

export class CreateCheckoutUseCase {
    constructor(
        private userRepository:IUserRepository,
        private sellerRepository:ISellerRepository,
        private checkoutRepository: ICheckoutRepository
    ){}

    async execute(data:CreateCheckoutRequest){
        const checkout = new Checkout(data);

        const user = await this.userRepository.findById(data.userId)

        const seller = await this.sellerRepository.findById(data.sellerId);

        if(!user){
            throw new CustomError('User does not exists!',400);
        }

        if(!seller){
            throw new CustomError('Seller does not exists!',400);
        }
        const lastCardNumberDigits = checkout.card_number.slice(checkout.card_number.length-4)
        checkout.card_number = lastCardNumberDigits

        const checkoutCreated = await this.checkoutRepository.save(checkout);
        return checkoutCreated
    }
}