import * as UserService from "../services/user.service.ts";
import type { Request, Response } from "express";
import type { CreateUser, UpdateUser } from "../types/user.type.ts";

export function getAllUsers(_req: Request, res: Response): void {
  const users = UserService.findAllUsers();

  res.status(200).json(users);
}

export function getUserById(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const user = UserService.findUserById(id);

  res.status(200).json(user);
}

export function createUser(req: Request, res: Response): void {
  const { name, email, password } = req.body as CreateUser;

  const user = UserService.InsertUser({ name, email, password });

  res.status(201).json(user);
}

export function updateUser(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const { name, email, password } = req.body as UpdateUser;

  const user = UserService.modifyUser(id, { name, email, password });

  res.status(200).json(user);
}

export function deletUser(req: Request, res: Response): void {
  const id = Number(req.params.id);

  UserService.removeUser(id);

  res.status(204).send();
}
