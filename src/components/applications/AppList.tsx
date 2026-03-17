import { getApplicationsByUserId } from '@/backend/controllers/applicationsController';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
import AppCard from './AppCard';

async function AppList () {
    const cookieStore = await cookies();
    const userId = cookieStore.get('user')?.value;
    if (!userId) redirect('/login');

    const applications = await getApplicationsByUserId(parseInt(userId));

    return (
        <article className="app-list">
            {applications.map((application) => <AppCard application={application} key={application.id}/>)}
        </article>
    );
}

export default AppList;