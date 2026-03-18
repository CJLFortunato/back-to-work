import CreateForm from '@/components/applications/CreateForm';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

async function CreateAppPage () {
    const cookieStore = await cookies();
    const userId = cookieStore.get('user')?.value;
    if (!userId) redirect('/login');

    return (
        <div className="logged-in-page">
            <h1>Create Application</h1>
            <CreateForm userId={parseInt(userId)} />
        </div>
    );
}

export default CreateAppPage;