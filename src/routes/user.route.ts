import { Router } from "express";
import { authenticateUserController } from "../modules/users/useCases/authenticate-user";
import { createUserController } from "../modules/users/useCases/create-user";
const userRouter = Router();


userRouter.post('/signin',async (request,response)=>{
   await authenticateUserController.handle(request,response)
})

userRouter.post('/signup',async (request,response)=>{
   await createUserController.handle(request,response)
})

export {userRouter}