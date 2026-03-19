import React from 'react';

import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUserInfoById } from '@/backend/controllers/userController';
import { logoutUser } from '@/backend/controllers/authController';

async function LoggedInLayout ({children}: {children: React.ReactNode}) {
    const cookieStore = await cookies();
    const userId = cookieStore.get('user');
    if (!userId || !userId.value) redirect('/login');
    const user = await getUserInfoById(parseInt(userId.value));
    if (!user) redirect('/login');

    return (
        <main className="logged-in-main">
            <aside>
                <p className="title">Back To Work</p>
                <nav>
                    <Link href="/applications/create" className="link-btn"> + Add an application</Link>
                    <Link href="/applications">Applications</Link>
                    <Link href="/tags">Manage Tags</Link>
                    <Link href="/user">User profile</Link>
                </nav>
                    <button onClick={logoutUser}>Log Out</button>
            </aside>
            {children}
        </main>
    );
}

export default LoggedInLayout;