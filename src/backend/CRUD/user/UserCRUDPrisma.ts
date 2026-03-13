import User from '@/backend/models/User';
import { UserInDb } from '@/types/userTypes';
import UserCRUD from './UserCRUDInterface';
import prisma from '../../../../prisma/prisma';

class UserCrudPrisma implements UserCRUD {
    async createUser (email: string, password: string, name: string) {
        const userInDb = await prisma.user.create({
            data: {
                email,
                password,
                name,
            },
        });

        const user = new User(
            userInDb.id,
            userInDb.email,
            userInDb.name,
            userInDb.insertion_date,
            userInDb.last_connexion,
        );

        return user;
    }

    async getUserById (id: number) {
        const user: UserInDb | null = await prisma.user.findUnique({
            where: {id: id},
        });

        return user;
    }

    async getUserByEmail (email: string) {
        const user: UserInDb | null = await prisma.user.findUnique({
            where: {email: email},
        });

        return user;
    }

    async getUserInfoById (id: number) {
        const userInDb: UserInDb | null = await prisma.user.findUnique({
            where: {id: id},
        });

        if (!userInDb) {
            return null;
        }

        const user = new User(
            userInDb.id,
            userInDb.email,
            userInDb.name,
            userInDb.insertion_date,
            userInDb.last_connexion,
        );

        return user;
    }

    async updateUser (id: number, newUser: User) {
        const cleanedUser = {
            name: newUser.name,
            email: newUser.email,
            // eslint-disable-next-line camelcase
            insertion_date: newUser.insertionDate,
            // eslint-disable-next-line camelcase
            last_connexion: newUser.lastConnexion,
        };

        const userInDb = await prisma.user.update({
            where: {id: id},
            data: {...cleanedUser},
        });

        const updatedUser = new User(
            userInDb.id,
            userInDb.email,
            userInDb.name,
            userInDb.insertion_date,
            userInDb.last_connexion,
        );

        return updatedUser;
    }

    async updateUserPassword (id: number, newPassword: string) {
        await prisma.user.update({
            where: {id: id},
            data: {password: newPassword},
        });
    }

    async deleteUser (id: number) {
        await prisma.user.delete({
            where: {id: id},
        });

    }
}

export default UserCrudPrisma;