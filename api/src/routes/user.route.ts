import * as UserController from '../controllers/user.controller.ts';
import {Router} from 'express';

const routerUsers = Router();

routerUsers.get('/', UserController.getAllUsers);

routerUsers.get('/:id', UserController.getUserById);

routerUsers.post('/', UserController.createUser);

routerUsers.put('/:id', UserController.updateUser);

routerUsers.delete('/:id', UserController.deletUser);

export default routerUsers;
