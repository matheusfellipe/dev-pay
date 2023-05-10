import dayjs from "dayjs";
import { prismaClient } from "../../../../infra/database/prisma.config";

import { PayableWithSellerDTO } from "../../dto/payable.dto";

import { Payables } from "../../entities/payable.entity";

import { PayableMapper } from "../../mapper/payable.map";

import { IPayableRepository } from "../payable.repository";

export class PayablePrismaRepository implements IPayableRepository{
   
    async save(data: Payables): Promise<Payables> {
       const payable = await prismaClient.payable.create({
        data:PayableMapper.entityToPrisma(data),
       })
       return PayableMapper.prismaToEntity(payable)
    }

}