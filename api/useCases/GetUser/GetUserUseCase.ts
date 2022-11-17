import { json, response } from "express";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserRequestDTO } from "./GetUserDTO";

export class GetUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
    ) { }

    async execute(data: IGetUserRequestDTO) {
        const user = await this.usersRepository.findByEmail(data.email);
        if (user) { return user } else { throw new Error('Could not find.'); }
    }
}

