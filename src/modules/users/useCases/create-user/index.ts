import { CreateUserController } from "./create-user.controller";
import { UserPrismaRepository } from "../../repositories/implementations/user.prisma.repository";
import { PasswordBcrypt } from "../../../../infra/shared/crypto/password.bcrypt";

const userPrismaRepository = new UserPrismaRepository();
const passwordBcrypt = new PasswordBcrypt();
const createUserController = new CreateUserController(
    userPrismaRepository,
    passwordBcrypt
   );


export { createUserController };
