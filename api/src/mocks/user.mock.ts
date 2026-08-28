import type { User } from "../types/user.type.ts";

const users: User[] = [
  {
    id: 1,
    name: "João Victor",
    email: "joao@gmail.com",
    password: crypto.randomUUID(),
  },
  {
    id: 2,
    name: "Alex Bessa",
    email: "alex@gmail.com",
    password: crypto.randomUUID(),
  },
  {
    id: 3,
    name: "Francisco José",
    email: "francisco@gmail.com",
    password: crypto.randomUUID(),
  },
];

export default users;
