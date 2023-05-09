import { CheckoutWithUserAndSellerDTO } from "../dto/checkout.dto";

import { Checkout } from "../entities/checkout.entity";

export interface ICheckoutRepository {
    save(data:Checkout):Promise<Checkout>
    findByUserIdOrSellerID(userId:string,sellerId:string):Promise<CheckoutWithUserAndSellerDTO[]|null>

}