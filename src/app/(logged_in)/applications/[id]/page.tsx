import { getApplicationById } from '@/backend/controllers/applicationsController';
import { redirect } from 'next/navigation';
import React from 'react';

async function AppPage ({params}: {params: Promise<{ id: string }>}) {
    const { id } = await params;
    const app = await getApplicationById(parseInt(id));
    if (!app) redirect('/applications');

    return (
        <div className="logged-in-page">
            <h1>{app.jobTitle}</h1>
            <p>{app.company}</p>
            <p>{app.contractType}</p>
            <p>{app.location}</p>
            <p>Salary: {app.salaryMin} - {app.salaryMax}</p>
            <p>{app.status}</p>
            <p>{app.hired}</p>
            <p>{app.insertionDate.toLocaleString()}</p>
            <p>{app.notes}</p>
        </div>
    );
}

export default AppPage;