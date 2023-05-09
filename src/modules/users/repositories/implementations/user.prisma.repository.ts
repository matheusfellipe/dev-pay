import { prismaClient } from "../../../../infra/database/prisma.config";
import { User } from "../../entities/user.entity";
import { IUserRepository } from "../user.repository";

export class UserPrismaRepository implements IUserRepository{
    async findById(id: string): Promise<User | null> {
        return await prismaClient.user.findUnique({
         where: {id:id}
        })
       }
        async findByEmail(email: string): Promise<User | undefined>  {
        const user = await prismaClient.user
        .findFirst({
         where: {
           email,
         },
        })
        return user || undefined
         }

   async save(data:User): Promise<User>{
 
        const user = await prismaClient.user.create({
          data: data,
        });
        return user;
      
   }
}