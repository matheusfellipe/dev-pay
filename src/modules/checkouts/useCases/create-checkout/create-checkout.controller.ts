import { string, z } from 'zod'

import { Request, Response } from "express";
import { logger } from "../../../../utils/logger";

import {  CreateCheckoutUseCase } from "./create-checkout.usecase";

import { IUserRepository } from "../../../users/repositories/user.repository";
import { ISellerRepository } from "../../../sellers/repositories/seller.repository";
import { ICheckoutRepository } from "../../repositories/checkout.repository";

import { validatorSchema } from '../../../../infra/shared/validator/zod'
import { ValidationSchemaError } from '../../../../errors/validation-schema.error'
import { IPayableRepository } from '../../../payables/repositories/payable.repository';
import { CreatePayableUseCase } from '../../../payables/useCases/create-payables/create-payable.usecase';


export class CreateCheckoutController{
    constructor(
        private userRepository:IUserRepository,
        private sellerRepository:ISellerRepository,
        private checkoutRepository:ICheckoutRepository,
        private payableRepository:IPayableRepository
    ){}

    async handle(request: Request, response: Response){
        logger.info("Checkout is being created!")
        const { body } = request

        const doctorSchema = z.object({
            price:z.number(),
            description:z.string(),
            card_number:z.string().max(16),
            card_owner:z.string(),
            card_expiring_date:z.string().min(6).max(7),
            cvv:z.string().length(3,{
                message:"CVV must contain 3 characters"
            }).max(4),
            userId:z.string().uuid({
                message: 'You need to insert a valid user ID',
            }),
            sellerId:z.string().uuid({
                message: 'You need to insert a valid seller ID',
            })
        })
        
        try {
            validatorSchema(doctorSchema, body)
            const createCheckoutUseCase = new CreateCheckoutUseCase(
                this.userRepository,
                this.sellerRepository,
                this.checkoutRepository,
                this.payableRepository
            )
            const checkoutCreated = await createCheckoutUseCase.execute(body)
            return response.json(checkoutCreated)
        } catch (error:any) {
            if (error instanceof ValidationSchemaError) {
                return response.status(error.statusCode).json(error.errors)
              }
              return response.status(error.statusCode).json(error.message)
        }
    }
}