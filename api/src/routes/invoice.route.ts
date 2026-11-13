import { Router } from "express";
import { findManyInvoices } from "../services/invoice.service.ts";

const router = Router();

router.get("/", (_req, res) => {
  const invoices = findManyInvoices();
  res.setHeader("Access-Control-Allow-Origin", "*");
  
  res.status(200).json(invoices);
});

export default router;