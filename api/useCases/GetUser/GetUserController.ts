import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";
import { User } from "../../entities/User"; // <-- PRECISEI IMPORTAR O TIPO 'USER'

export class GetUserController {
    constructor(
        private getUserUseCase: GetUserUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;

        try { // \/ \/ E ENTÃO COLOCAR A RESPOSTA NUMA VARIÁVEL
            const user: User = await this.getUserUseCase.execute({ email })
            return response.status(201).send(user) // < DAÍ EU RETORNO ELA JUNTO COM O STATUS
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Erro inesperado ao pegar usuario.'
            })
        }
    }
}