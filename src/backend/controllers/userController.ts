'use server';

import UserCrudPrisma from '../CRUD/user/UserCRUDPrisma';
import UserService from '../services/UserService';

const userService = new UserService(new UserCrudPrisma());
export async function getUserInfoById (id: number) {
    const user = await userService.getUserInfos(id);

    return user;
}