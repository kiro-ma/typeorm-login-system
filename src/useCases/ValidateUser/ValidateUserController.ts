import { Request, Response } from "express";
import { ValidateUserUseCase } from "./ValidateUserUseCase";

export class ValidateUserController {
    constructor(
        private validateUserUseCase: ValidateUserUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body
        try {
            const validacao = await this.validateUserUseCase.execute({ email, password })
            return response.status(201).send(validacao)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Erro inesperado ao validar usuário.'
            })
        }
    }
}