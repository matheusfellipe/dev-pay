import { sign, verify } from "jsonwebtoken";

import { createHmac } from "crypto";

import { User } from "@prisma/client";
import { IToken, TokenUser } from "./token";

export class JWTToken implements IToken {
 

private TOKEN_SECRET = process.env.SECRET_KEY_TOKEN || '';

private TOKEN_SECRET_CRYPTO = createHmac('sha256',this.TOKEN_SECRET).digest('base64')

    create({email,id}: User): string {
           const token = sign({user:{email,id}},this.TOKEN_SECRET_CRYPTO,{
                subject: id,
                expiresIn: '1m',
            })

            return token
    }

    validate(token: string): TokenUser|null {
        try {
            return verify(token,this.TOKEN_SECRET_CRYPTO) as TokenUser

           
        } catch (error) {
            return null
        }
     
       
    }
}