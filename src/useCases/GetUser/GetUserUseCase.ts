import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserRequestDTO } from "./GetUserDTO";

export class GetUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
    ) { }

    async execute(data: IGetUserRequestDTO) {
        const response = await this.usersRepository.findByEmail(data.email);
        if (response) {
            const user = { "id": response.id, "name": response.name, "email": response.email, "superuser": response.superuser }
            return user
        } else { throw new Error('Could not find.'); }
    }
}