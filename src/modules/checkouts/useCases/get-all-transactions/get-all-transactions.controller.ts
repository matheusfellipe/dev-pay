import { ICheckoutRepository } from "../../repositories/checkout.repository";

import { Request, Response } from "express";
import { logger } from "../../../../utils/logger";

import { GetAllTransactionsUseCase } from "./get-all-transactions.usecase";

export class GetAllCheckout {
    constructor(private checkoutRepository:ICheckoutRepository){

    }
    async handle(request: Request, response: Response) {
        try {
          const { userId, sellerId } = request.body;
          
          const getAllTransactionsUseCase = new GetAllTransactionsUseCase(this.checkoutRepository);
          const checkouts = await getAllTransactionsUseCase.execute({ userId, sellerId });
    
          return response.status(200).json(checkouts);
        } catch (error) {
          logger.error(error);
          return response.status(500).json({ message: "Internal server error" });
        }
      }
}