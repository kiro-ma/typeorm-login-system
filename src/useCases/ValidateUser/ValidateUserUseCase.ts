import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IValidateUserRequestDTO } from "./ValidateUserDTO";

export class ValidateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
    ) { }

    async execute(data: IValidateUserRequestDTO) {
        return await this.usersRepository.validateUser(data.email, data.password);
    }
}