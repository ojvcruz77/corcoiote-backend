import prisma from "../lib/prisma.ts";
import type { CreateUser, UpdateUser } from "../schemas/user.schemas.ts";
import type { User } from "../types/user.type.ts";

export async function findAllUsers(): Promise<User[]> {
  return prisma.user.findMany({ orderBy: { id: "asc" } });
}

export async function findUserById(id: number): Promise<User> {
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) throw new Error(`Usuário de id ${id} não encontrado.`);

  return user;
}

export async function insertUser(datas: CreateUser): Promise<User> {
  return prisma.user.create({ data: datas });
}

export async function modifyUser(id: number, datas: UpdateUser): Promise<User> {
  await findUserById(id);

  return prisma.user.update({
    where: { id },
    data: datas,
  });
}

export async function removeUser(id: number): Promise<void> {
  await findUserById(id);
  await prisma.user.delete({ where: { id } });
}
