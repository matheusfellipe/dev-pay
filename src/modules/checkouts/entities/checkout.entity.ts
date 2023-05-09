import { generateUUID } from "../../../utils/generateUUID";

export type CheckoutProps = {
  price: number;
  description: string;
  card_number: string;
  card_owner: string;
  card_expiring_date: Date;
  cvv: string;
  userId: string;
  sellerId: string;
  createdAt:Date
};

export class Checkout {
  public readonly id: string;
  public readonly userId: string;
  public readonly sellerId: string;
  public price: number;
  public description: string;
  public card_owner: string;
  public card_number: string;
  public card_expiring_date: Date;
  public cvv?: string;
  public createdAt: Date

  constructor(props: CheckoutProps) {
    this.price = props.price;
    this.description = props.description;
    this.card_owner = props.card_owner;
    this.card_number = props.card_number;
    this.card_expiring_date = props.card_expiring_date;
    this.cvv = props.cvv;
    this.id = generateUUID();
    this.userId = props.userId;
    this.sellerId = props.sellerId;
    this.createdAt = props.createdAt
  }
}
