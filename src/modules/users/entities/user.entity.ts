import { randomUUID } from 'crypto'

type IUser = {
    name:String
    email:String
    password:String
    cpf:String
}

export class User {
   
  public readonly id: String;

  public name: String;
  public email: String;
  public cpf: String
  public password: String;

  constructor(props: IUser) {
   this.name = props.name
   this.email = props.email
   this.cpf = props.cpf
   this.password = props.password
   this.id = randomUUID()
   
  }
}