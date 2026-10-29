import * as UserService from "../services/user.service.ts";
import type { Request, Response } from "express";
import type { CreateUser, UpdateUser } from "../schemas/user.schemas.ts";

export async function getAllUsers(_req: Request, res: Response): Promise<void> {
  const users = await UserService.findAllUsers();

  res.status(200).json(users);
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);
  const user = await UserService.findUserById(id);

  res.status(200).json(user);
}

export async function createUser(req: Request, res: Response): Promise<void> {
  const { name, email, password } = req.body as CreateUser;

  const user = await UserService.insertUser({ name, email, password });

  res.status(201).json(user);
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);
  const { name, email, password } = req.body as UpdateUser;

  const user = await UserService.modifyUser(id, { name, email, password });

  res.status(200).json(user);
}

export async function deletUser(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);

  await UserService.removeUser(id);

  res.status(204).send();
}
