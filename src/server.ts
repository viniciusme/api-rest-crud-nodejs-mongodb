import express from "express";

import routes from "../src/presentation/routes/routes";
const port = process.env.PORT || 3000;

// Cria uma nova instância do aplicativo expresso
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

//Chama midlewares
app.use(express.json());

//Definir todas as rotas da pasta de rotas
app.use("/", routes);

// Inicia servidor express
const server = app.listen(port, () => {
  console.log(
    `O servidor da API foi iniciado na porta ${port}. Abra http://localhost:${port} para ver os resultados`
  );
});
