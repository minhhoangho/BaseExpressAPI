import {
  Repository
} from './Base/Repository';
import User from '../../database/models/User';
class UserRepository extends Repository {
  static instance;

  static getRepository() {

    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository(User);
    }

    return UserRepository.instance;
  }
}
export {
  UserRepository
}