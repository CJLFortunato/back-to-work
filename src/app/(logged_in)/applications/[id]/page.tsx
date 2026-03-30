import { getApplicationById } from '@/backend/controllers/applicationsController';
import UpdateForm from '@/components/applications/UpdateForm';
import { redirect } from 'next/navigation';
import React from 'react';

async function UpdatePage ({params}: {params: Promise<{ id: string }>}) {
    const { id } = await params;
    const app = await getApplicationById(parseInt(id));
    if (!app) redirect('/applications');

    return (
        <div className="logged-in-page">
            <UpdateForm app={{...app}} />
        </div>
    );
}

export default UpdatePage;