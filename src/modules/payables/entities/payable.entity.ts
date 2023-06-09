import { randomUUID } from "crypto";
import { generateUUID } from "../../../utils/generateUUID";

export type StatusProps = 'pending'|'paid'

export type PayablesProps = {
  status: StatusProps;
  payment_date: Date;
  type_payment: string;
  balance: number;
  sellerId: string;
  checkoutId:string;
};

export class Payables {
  public readonly id: string;
  public readonly checkoutId: string;
  public readonly sellerId: string;
  public status: StatusProps;
  public  payment_date: Date;
  public type_payment: string;
  public balance: number;
  

  constructor(props: PayablesProps) {
    this.status = props.status;
    this.payment_date = props.payment_date;
    this.type_payment = props.type_payment;
    this.balance = props.balance;
    this.checkoutId = props.checkoutId;
    this.id = generateUUID();
    this.sellerId = props.sellerId;
   
  }
}
