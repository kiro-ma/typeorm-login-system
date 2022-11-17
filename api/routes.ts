import { Router } from "express";
import { createUserController } from "./useCases";
import { getUserController } from "./useCases";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.get('/users', (request, response) => {
  //response.json({response})
  return getUserController.handle(request, response);
});

export { router }