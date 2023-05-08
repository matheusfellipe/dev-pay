import { user,Seller } from "@prisma/client";

export type TokerUser = {
    sub:string
}

export interface IToken {
    create(user:user|Seller):string
    validate(token:string):TokerUser|null
}