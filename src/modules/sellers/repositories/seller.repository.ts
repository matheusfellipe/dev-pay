import { Seller } from "../entities/seller.entity"

export interface ISellerRepository {
    findByEmail(email: string): Promise<Seller|undefined>
    save(data: Seller): Promise<Seller>
    findById(id:string):Promise<Seller|null>
}