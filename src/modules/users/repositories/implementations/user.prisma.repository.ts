import { prismaClient } from "../../../infra/database/prisma.config";

export class UserPrismaRepository {
    async findById(id: string){
        return await prismaClient.user.findUnique({
         where: {id:id}
        })
       }
        async findByEmail(email: string) {
        const user = await prismaClient.user
        .findFirst({
         where: {
           email,
         },
        })
        return user || undefined
         }

   async create(data:any){
 
        const user = await prismaClient.user.create({
          data: data,
        });
        return user;
      
   }
}