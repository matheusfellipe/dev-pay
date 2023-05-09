import { generateUUID } from '../../../utils/generateUUID'

type ISeller = {
    name:string
    email:string
    password:string
    cnpj:string
}

export class Seller {
   
  public readonly id: string;

  public name: string;
  public email: string;
  public cnpj: string
  public password: string;

  constructor(props: ISeller) {
   this.name = props.name
   this.email = props.email
   this.cnpj = props.cnpj
   this.password = props.password
   this.id = generateUUID()
   
  }
}