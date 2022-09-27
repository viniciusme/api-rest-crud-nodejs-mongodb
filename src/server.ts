import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const port = 3000;

const app = express();

app.use(express.json());

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Send message for default URL
app.get("/", (req, res) => res.send("Welcome to NodeJs App using TypeScript"));
