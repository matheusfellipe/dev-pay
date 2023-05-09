import { StatusProps } from "../entities/payable.entity";

export type PayableWithSellerDTO = {
  status: StatusProps;
  payment_date: Date;
  type_payment: string;
  balance: number;
  id: string
  sellerId: string
  seller: {
      name: string
    }
  checkoutId:string
  checkout:{
    description:string
  }
  }