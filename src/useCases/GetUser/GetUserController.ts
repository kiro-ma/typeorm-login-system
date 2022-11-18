import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";
import { User } from "../../entity/User";

export class GetUserController {
    constructor(
        private getUserUseCase: GetUserUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;

        try { 
            const user: User = await this.getUserUseCase.execute({ email })
            return response.status(201).send(user)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Erro inesperado ao pegar usuario.'
            })
        }
    }
}