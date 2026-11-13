import express from "express";
import path from "node:path";
//import routerUsers from "./routes/user.route.ts";
import routerInvoices from "./routes/invoice.route.ts";

const client = path.join(import.meta.dirname, '../', '../', 'web');

const app = express();

app.use(express.json());

//app.use("/users", routerUsers);

app.use("/invoices", routerInvoices);

app.use(express.static(client));

app.listen(process.env.PORT);
