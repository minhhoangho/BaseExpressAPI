import {
  Router
} from 'express';

const route = Router()
import {
  userController
} from '../../http/controllers/UserController';
route.base = 'users';

route.get('/', [
  // some middlewares here
], userController.callMethod('getAllUser'))

export default route;