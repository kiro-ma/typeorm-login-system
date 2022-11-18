import { MailtrapMailProvider } from "../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../repositories/implementations/PostgresUsersRepository";

import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase";
import { CreateUserController } from "./CreateUser/CreateUserController";

import { GetUserUseCase } from "./GetUser/GetUserUseCase";
import { GetUserController } from "./GetUser/GetUserController";

const postgresUsersRepository = new PostgresUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase,
)

const getUserUseCase = new GetUserUseCase(
  postgresUsersRepository,
)

const getUserController = new GetUserController(
  getUserUseCase,
)

export { createUserUseCase, createUserController, getUserUseCase, getUserController }