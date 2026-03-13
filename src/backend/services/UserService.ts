import UserCRUD from '../CRUD/user/UserCRUDInterface';
import User from '../models/User';
import AuthUtils from '../utils/AuthUtils';

class UserService {
  userCRUD: UserCRUD;
  constructor (userCRUD: UserCRUD) {
    this.userCRUD = userCRUD;
  }

  async createUser(email: string, password: string, name: string): Promise<User> {
    let user: User;
    console.log('===================================');
    console.log(email, password.length, name);
    console.log('===================================');
    try {
      user = await this.userCRUD.createUser(email, password, name);
    }
    catch (error) {
      console.error(error);
      throw new Error('An error has occured while creating user');
    }

    return user;
  }

  async getUserInfos(id: number): Promise<User> {
    let user: User | null;
    try {
      user = await this.userCRUD.getUserInfoById(id);

      if (!user) {
        throw new Error('This user doesn\'t exist');
      }
    }
    catch (error) {
      console.error(error);
      throw new Error('An error has occured while fetching user');
    }
    return user;
  }

  async updateUser(id: number, newUser: User): Promise<User> {
    let user: User;
    try {
      user = await this.userCRUD.updateUser(id, newUser);
    }
    catch (error) {
      console.error(error);
      throw new Error('An error has occured while updating user');
    }
    return user;
  }

  async updateUserPassword(id: number, newPassword: string): Promise<void> {
    try {
      const hashedPassword = await AuthUtils.hashPassword(newPassword);
      this.userCRUD.updateUserPassword(id, hashedPassword);
    }
    catch (error) {
      console.error(error);
      throw new Error('An error has occured while updating user password');
    }
  }

  deleteUser(id: number): void {
    try {
      this.userCRUD.deleteUser(id);
    }
    catch (error) {
      console.error(error);
      throw new Error('An error has occured while deleting user');
    }
  }

}

export default UserService;