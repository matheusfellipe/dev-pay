import { CustomError } from "../../../../errors/custom.error";
import { Seller } from "../../entities/seller.entity";
import { ISellerRepository } from "../../repositories/seller.repository";
import { SellerDTO } from "../../dto/seller.dto";





export class CreateSellerUseCase {
   
    constructor(private sellerRepository: ISellerRepository){

    }


    async execute (data: SellerDTO){

    
      

        const existUser = await this.sellerRepository.findByEmail(data.email);

        if(existUser){
            throw new CustomError("Usuário already exists",400,'USER_EXISTS_ERROR');
        }
      
        const user = new Seller(data);
        const userCreated = await this.sellerRepository.save(user);

        return userCreated
    }
}
