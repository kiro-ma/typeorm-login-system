import { Router } from "express";
import { createUserController } from "./useCases";
import { getUserController } from "./useCases";
import { validateUserController } from "./useCases";
import path from "path";

const router = Router()

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/webapp/templates/login.html'));
});

router.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname, '/webapp/templates/index.html'));
})

router.get('/index_superuser', function (req, res) {
  res.sendFile(path.join(__dirname, '/webapp/templates/index_superuser.html'));
})

router.get('/login.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/webapp/scripts/login.js'));
});

router.post('/users', (req, res) => {
  return createUserController.handle(req, res);
});

router.get('/users/:email', (req, res) => {
  const email = req.params.email
  req.body = { "email": email }
  return getUserController.handle(req, res);
});

router.get('/users/:email/:senha', (req, res) => {
  const email = req.params.email
  const senha = req.params.senha
  req.body = { "email": email, "password": senha }
  return validateUserController.handle(req, res);
});

export { router }