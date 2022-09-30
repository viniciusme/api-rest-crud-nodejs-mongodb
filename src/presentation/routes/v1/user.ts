import { Router } from "express";

const Person = require("../../../core/entity/Person");

const router = Router();

// Lista todas as pessoas cadastradas no banco de dados
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();

    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Pega uma única pessoa pelo Id
router.get("/:id", async (req, res) => {
  // extrair o dado da requisição, pela url = req.params
  const id = req.params.id;

  try {
    const person = await Person.findOne({ _id: id });

    if (!person) {
      res.status(422).json({ msg: "O usuário não foi encontrado" });

      return;
    }

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Cria uma nova pessoa
router.post("/", async (req, res) => {
  // req.body

  // { name: "Matheus", salary: "5000", approved: false }
  const { name, salary, approved } = req.body;

  if (!name) {
    res.status(422).json({ error: "O nome é obrigatório!" });

    return;
  } else if (!salary) {
    res.status(422).json({ error: "O salario é obrigatório!" });

    return;
  } else if (!approved) {
    res.status(422).json({ error: "O campo aprovado é obrigatório!" });

    return;
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

//Update de uma única pessoa pelo Id (PUT ou PATCH)
router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { name, salary, approved } = req.body;

  if (!name) {
    res.status(422).json({ error: "O nome é obrigatório!" });

    return;
  } else if (!salary) {
    res.status(422).json({ error: "O salario é obrigatório!" });

    return;
  } else if (!approved) {
    res.status(422).json({ error: "O campo aprovado é obrigatório!" });

    return;
  }

  const person = {
    name,
    salary,
    approved,
  };

  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person);

    console.log(updatedPerson);

    if (updatedPerson.matchedCount === 0) {
      res.status(422).json({ msg: "O usuário não foi encontrado" });
    }

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// //Deleta um único usuário pelo Id
router.delete("/:id", async (req, res) => {
  // extrair o dado da requisição, pela url = req.params
  const id = req.params.id;

  const person = await Person.findOne({ _id: id });
  console.log(person);

  if (!person) {
    res.status(422).json({ msg: "O usuário não foi encontrado" });

    return;
  }

  try {
    await Person.deleteOne({ _id: id });

    res.status(200).json({ msg: "Usuário removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
