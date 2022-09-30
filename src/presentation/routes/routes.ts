import { Router, Request, Response } from "express";
import user from "../routes/v1/user";

const routes = Router();

//Chama rotas do App
// routes.use("/auth", auth);
routes.use("/user", user);

//Rota health-check
routes.get("/", (req, res) => {
  res.status(200).json({ msg: "Rota health-check funcionando!" });
});

export default routes;
