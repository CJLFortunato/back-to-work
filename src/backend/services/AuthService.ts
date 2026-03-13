import { UserInDb } from '@/types/userTypes';
import User from '../models/User';
import AuthUtils from '../utils/AuthUtils';
import UserService from './UserService';
import bcrypt from 'bcrypt';

class AuthService {
    userService: UserService;
    constructor (userService: UserService) {
        this.userService = userService;
    }
  async login(email: string, password: string) {
    let user: User;

    try {
      const userInDb: UserInDb = await this.userService.getUserByEmail(email);

      if (!userInDb) {
        throw new Error('User doesn\'t exist');
      }

      const passwordMatches = await bcrypt.compare(password, userInDb.password);

      if (!passwordMatches) {
        throw new Error('Wrong password');
      }

      user = new User(
        userInDb.id,
        userInDb.email,
        userInDb.name,
        userInDb.insertion_date,
        userInDb.last_connexion,
      );
    } catch (error) {
      console.error(error);
      throw new Error('An error has occured during the login process');
    }
    return user;
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