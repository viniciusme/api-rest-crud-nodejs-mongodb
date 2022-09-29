import express from "express";

import { dbConnection } from "./core/data/db";
import routes from "../src/presentation/routes/routes";

// Habilitando variáveis de ambiente
require("dotenv").config();
const port = process.env.PORT;

// Cria uma nova instância do aplicativo expresso
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Chama midlewares
app.use(express.json());

//Definir todas as rotas da pasta de rotas
app.use("/", routes);

// Inicia servidor express
const server = app.listen(port, () => {
  console.log(
    `O servidor da API foi iniciado na porta ${port}. Abra http://localhost:${port} para ver os resultados`
  );
});

// Conexão com MongoDb
dbConnection();
