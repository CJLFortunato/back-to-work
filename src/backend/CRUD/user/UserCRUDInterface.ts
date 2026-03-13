/* eslint-disable no-unused-vars */
import User from '@/backend/models/User';
import { UserInDb } from '@/types/userTypes';

interface UserCRUD {
    createUser: (email: string, password: string, name: string) => User | Promise<User>;
    getUserById: (id: number) => UserInDb | null | Promise<UserInDb | null>;
    getUserByEmail: (email: string) => UserInDb | null | Promise<UserInDb | null>;
    getUserInfoById: (id: number) => User | null | Promise<User | null>;
    updateUser: (id: number, newUser: User) => User | Promise<User>;
    updateUserPassword: (id: number, newPassword: string) => void;
    deleteUser: (id: number) => void;
}

export default UserCRUD;