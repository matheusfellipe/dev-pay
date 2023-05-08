import { sign, verify } from "jsonwebtoken";

import { createHmac } from "crypto";

import { user } from "@prisma/client";
import { IToken, TokerUser } from "./token";

export class JWTToken implements IToken {
 

private TOKEN_SECRET = process.env.SECRET_KEY_TOKEN || '';

private TOKEN_SECRET_CRYPTO = createHmac('sha256',this.TOKEN_SECRET).digest('base64')

    create({email,id}: user): string {
           const token = sign({user:{email,id}},this.TOKEN_SECRET_CRYPTO,{
                subject: id,
                expiresIn: '1m',
            })

            return token
    }

    validate(token: string): TokerUser|null {
        try {
            return verify(token,this.TOKEN_SECRET_CRYPTO) as TokerUser

           
        } catch (error) {
            return null
        }
     
       
    }
}