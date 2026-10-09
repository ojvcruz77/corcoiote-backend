import express from "express";
import routerUsers from "./routes/user.route.ts";

const app = express();
const port = Number(process.env.PORT ?? 3000);
app.use(express.json());
app.use("/users", routerUsers);
app.listen(port);
