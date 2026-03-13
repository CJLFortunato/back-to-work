'use server';

// import { UserRegisterForm } from '@/types/userTypes';
import UserCrudPrisma from '../CRUD/user/UserCRUDPrisma';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const userService = new UserService(new UserCrudPrisma());
const authService = new AuthService(userService);

export async function registerUser (formData: FormData) {
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';
    const name = formData.get('name')?.toString() || '';

    let canRedirect = false;

    try {
        const cookieStore = await cookies();
        const newUser = await authService.register(email, password, name);

        if (!newUser) {
            throw new Error('Couldn\'t create new user');
        }

        cookieStore.set({
            name: 'user',
            value: newUser.id.toString(),
            httpOnly: true,
            path: '/',
            expires: new Date(Date.now()).setHours(720), // 30 days validity
        });
        canRedirect = true;
    } catch (error) {
        console.error(error);
    }

    if (canRedirect) return redirect('/applications');
}