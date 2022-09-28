import { Router } from "express";

const router = Router();

//Pega todos os usuários
router.get("/", (req, res) => {
  res.status(200).json({ msg: "Rota listas todos usuários funcionando!" });
});

// Pega um único usuário pelo Id

//Cria um novo usuário

//Edito um único usuário pelo Id

// //Deleta um único usuário pelo Id

export default router;
