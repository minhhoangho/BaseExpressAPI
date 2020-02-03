import {
  UserService
} from '../services/UserService';
import Controller from './Base/Controller';
import {
  handleExceptionResponse
} from '../../utils/Logging';
class UserController extends Controller {
  constructor() {
    super();
    this.userService = UserService.getService()
  }

  async getAllUser(req, res) {
    try {
      const result = await this.userService.getAll({})
      res.json(result)
    } catch (error) {
      handleExceptionResponse(res)
    }

  }

}

export const userController = new UserController()