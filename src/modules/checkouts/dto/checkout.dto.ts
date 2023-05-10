export type CheckoutWithUserAndSellerDTO = {
    price: number;
    description: string;
    card_number: string;
    card_owner: string;
    card_expiring_date: string;
    cvv?: string;
    id: string
    userId: string
    user: {
      name: string
    }
    sellerId: string
    seller: {
      name: string
    }
    createdAt:Date
  }

  export type CheckoutListWithUserAndSellerDTO = Array<CheckoutWithUserAndSellerDTO>