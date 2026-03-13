import React from 'react';

import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUserInfoById } from '@/backend/controllers/userController';

async function LoggedInLayout ({children}: {children: React.ReactNode}) {
    const cookieStore = await cookies();
    const userId = cookieStore.get('user');
    if (!userId || !userId.value) redirect('/login');
    const user = await getUserInfoById(parseInt(userId.value));
    if (!user) redirect('/login');

    return (
        <main className="logged-in-main">
            <aside>
                <p>Back To Work</p>
                <nav>
                    <Link href="/applications/create">Add an application</Link>
                    <Link href="/tags">Manage Tags</Link>
                    <Link href="/user">User profile</Link>
                    <Link href="/">Log Out</Link>
                </nav>
            </aside>
            {children}
        </main>
    );
}

export default LoggedInLayout;