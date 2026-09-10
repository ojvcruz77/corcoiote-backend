export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type createUser = Omit<User, 'id'>;