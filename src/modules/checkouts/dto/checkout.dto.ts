export type CheckoutWithUserAndSellerDTO = {
    price: number;
    description: string;
    card_number: string;
    card_owner: string;
    card_expiring_date: Date;
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