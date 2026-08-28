import users from "./mocks/user.mock.ts";
import express from "express";

const app = express();
const port = 3000;

app.get("/users", (_req, res) => {
  res.status(200).json(users);
});

app.listen(3000);
