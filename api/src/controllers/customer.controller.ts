import * as UserService from "../services/customer.service.ts";
import type { Request, Response } from "express";
import type {
  CreateCustomer,
  UpdateCustomer,
} from "../schemas/customer.schemas.ts";

export function getAllUsers(_req: Request, res: Response): void {
  const users = UserService.findAllCustomers();

  res.status(200).json(users);
}

export function getUserById(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const user = UserService.findCustomerById(id);

  res.status(200).json(user);
}

export function createUser(req: Request, res: Response): void {
  const { name, email, imageUrl } = req.body as CreateCustomer;

  const user = UserService.insertCustomer({ name, email, imageUrl });

  res.status(201).json(user);
}

export function updateUser(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const { name, email, imageUrl } = req.body as UpdateCustomer;

  const user = UserService.modifyCustomer(id, { name, email, imageUrl });

  res.status(200).json(user);
}

export function deletUser(req: Request, res: Response): void {
  const id = Number(req.params.id);

  UserService.removeCustomer(id);

  res.status(204).send();
}
