import { CustomError } from "../../../../errors/custom.error";
import { ParameterRequiredError } from "../../../../errors/parameter-required.error";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";

type UserRequest = {
    id:number,
    name: string,
    email: string,
    password: string,
}

export class CreateUserUseCase {
   
    constructor(private userRepository: IUserRepository){

    }


    async execute (data: UserRequest){

    
        const user = await User.create(data);

        const existUser = await this.userRepository.findByEmail(data.email);

        if(existUser){
            throw new CustomError("Usuário already exists",400,'USER_EXISTS_ERROR');
        }
      
    
        const userCreated = await this.userRepository.save(user);

        return userCreated
    }
}
