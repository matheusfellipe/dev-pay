
import { User } from "../../../modules/users/entities/user.entity";

export type TokerUser = {
    sub:string
}

export interface IToken {
    create(user:User):string
    validate(token:string):TokerUser|null
}