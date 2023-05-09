import { CustomError } from "../../../../errors/custom.error"
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto"
import { IToken } from "../../../../infra/shared/token/token"
import { IUserRepository } from "../../repositories/user.repository"

type AuthenticateRequest = {
    email: string,
    password:string
}


export class AuthenticateUserUseCase {


    constructor(private userRepository: IUserRepository,private passwordCrypto:IPasswordCrypto,private token:IToken){

    }

    async execute({email,password}:AuthenticateRequest){
        if(!email || !password){
            throw new CustomError("Email/password incorrect",401)
        }

        const user = await this.userRepository.findByEmail(email);

        if(!user){
            throw new CustomError("Email/password incorrect",401)
        }

        const comparePasswordEquals = await this.passwordCrypto.compare(password,user.password)

        if(!comparePasswordEquals){
            throw new CustomError("Email/password incorrect",401)
        }

        const tokenGenerated = this.token.create(user);

        return tokenGenerated
    }
}