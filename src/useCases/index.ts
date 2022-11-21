import { MailtrapMailProvider } from "../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../repositories/implementations/PostgresUsersRepository";

import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase";
import { CreateUserController } from "./CreateUser/CreateUserController";

import { GetUserUseCase } from "./GetUser/GetUserUseCase";
import { GetUserController } from "./GetUser/GetUserController";

import { ValidateUserUseCase } from "./ValidateUser/ValidateUserUseCase";
import { ValidateUserController } from "./ValidateUser/ValidateUserController";

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

const validateUserUseCase = new ValidateUserUseCase(
  postgresUsersRepository,
)

const validateUserController = new ValidateUserController(
  validateUserUseCase,
)

export { createUserUseCase, createUserController, getUserUseCase, getUserController, validateUserController }