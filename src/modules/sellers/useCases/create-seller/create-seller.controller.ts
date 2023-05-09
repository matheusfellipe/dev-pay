import { Request, Response } from "express";
import { logger } from "../../../../utils/logger";
import { ISellerRepository } from "../../repositories/seller.repository";
import { CreateSellerUseCase } from "./create-seller.usecase";


export class CreateSellerController {
    constructor(private sellerRepository: ISellerRepository){}


    async handle(request: Request, response: Response) {
        logger.info("Seller is being created!")
        try {
           
            const data = request.body;
            const useCase = new CreateSellerUseCase(
                this.sellerRepository,
               
            );
            const result = await useCase.execute(data);

            return response.json(result);
        } catch (error:any) {
            logger.error(error.stack)
            return response.status(error.statusCode).json(error.message)
        }

    }
}