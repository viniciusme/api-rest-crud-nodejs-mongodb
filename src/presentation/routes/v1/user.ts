import { Router } from "express";

const Person = require("../../../core/entity/Person");

const router = Router();

//Pega todos as pessoas cadastradas no banco de dados
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();

    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Pega um único usuário pelo Id

//Cria uma nova pessoa
router.post("/", async (req, res) => {
  // req.body

  // { name: "Matheus", salary: "5000", approved: false }
  const { name, salary, approved } = req.body;

  if (!name) {
    res.status(422).json({ error: "O nome é obrigatório!" });
  } else if (!salary) {
    res.status(422).json({ error: "O salario é obrigatório!" });
  }

  const person = {
    name,
    salary,
    approved,
  };

  // create do mongoose
  try {
    await Person.create(person);

    res.status(201).json({ msg: "Pessoa inserida no sistema com sucesso." });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Edito um único usuário pelo Id

// //Deleta um único usuário pelo Id

export default router;
