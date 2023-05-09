import { PayableWithSellerDTO } from "../dto/payable.dto";

import { Payables } from "../entities/payable.entity";

export interface IPayableRepository {
    save(data:Payables):Promise<Payables>
  

}