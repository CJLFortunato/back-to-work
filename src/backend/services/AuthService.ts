import User from '../models/User';
import AuthUtils from '../utils/AuthUtils';
import UserService from './UserService';

class AuthService {
    userService: UserService;
    constructor (userService: UserService) {
        this.userService = userService;
    }
  login() {
    return 'User has been logged in';
  }

  async register(email: string, password: string, name: string) {
    let user: User;

    try {
        const hashedPassword = await AuthUtils.hashPassword(password);
        user = await this.userService.createUser(email, hashedPassword, name);
    } catch (error) {
        console.error(error);
        throw new Error('An error has occured while creating user');
    }

    return user;
  }
}

export default AuthService;