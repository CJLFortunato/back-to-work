import React from 'react';

import Link from 'next/link';

function LoggedInLayout ({children}: {children: React.ReactNode}) {
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