import * as UserController from '../controllers/user.controller.ts';
import {Router} from 'express';

const routerUsers = Router();

routerUsers.get('/', UserController.getAllUsers);

export default routerUsers;