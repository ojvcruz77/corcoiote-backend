import express from "express";
import routerUsers from "./routes/user.route.ts";

const app = express();
const port = 3000;
app.use(express.json());
app.use("/users", routerUsers);
app.listen(3000);
