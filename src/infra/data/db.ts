import mongoose from "mongoose";

require("dotenv").config();
const DB_USER = process.env.DB_CONNECTION_USER;
const DB_PASSWORD = process.env.DB_CONNECTION_PASSWORD;

export const dbConnection = () => {
  mongoose
    .connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.mrivos6.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
    .then(() => {
      // Conectado ao MongoDb
      console.log("Conectado ao MongoDB...");
    })
    .catch((err) => console.log(err));
};
