import { generateUUID } from '../../../utils/generateUUID'

type IUser = {
    name:string
    email:string
    password:string
    cpf:string
}

export class User {
   
  public readonly id: string;

  public name: string;
  public email: string;
  public cpf: string
  public password: string;

  constructor(props: IUser) {
   this.name = props.name
   this.email = props.email
   this.cpf = props.cpf
   this.password = props.password
   this.id = generateUUID()
   
  }
}