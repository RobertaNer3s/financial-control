import express from "express";
import bodyParser from "body-parser";
import { User } from "./entity/User.mjs";
import cors from "cors";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let user = new User("Roberta", "roberta@mail.com", "roberta.com");

app.get("/", (req, res) => {
  res.send(user);
});

app.post("/", (req, res) => {
  const { email, name, url } = req.body;
  if (!email || !name || !url) {
    return res.status(400).send({ error: "Missing required fields" });
  }

  user = new User(name, email, url);
  res.send({ message: "User created successfully" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
