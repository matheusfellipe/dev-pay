import { CustomError } from "../../../../errors/custom.error";
import { User } from "../../entities/user.entity";
import { IUserRepository } from "../../repositories/user.repository";
import { UserDTO } from "../../dto/create-user.dto";



export class CreateUserUseCase {
   
    constructor(private userRepository: IUserRepository){

    }


    async execute (data: UserDTO){

    
      

        const existUser = await this.userRepository.findByEmail(data.email);

        if(existUser){
            throw new CustomError("Usuário already exists",400,'USER_EXISTS_ERROR');
        }
      
        const user = new User(data);
        const userCreated = await this.userRepository.save(user);

        return userCreated
    }
}
