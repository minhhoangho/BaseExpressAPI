import {
  UserRepository
} from '../repositories/UserRepository';
import {
  Service
} from './Base/Service';
class UserService extends Service {

  static instance;

  constructor() {
    super()
    this.respository = UserRepository.getRepository();
  }

  static getService() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }

    return UserService.instance;
  }

  getRepository() {
    return this.repository;
  }


}
export {
  UserService
}