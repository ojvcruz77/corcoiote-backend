import * as UserService from "../services/user.service.ts";
import type { Response } from "express";

export function getAllUsers(_req: Request, res: Response): void {
  const users = UserService.findAllUsers();

  res.status(200).json(users);
}
