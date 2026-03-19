'use client';

import { deleteApplication, updateApplication } from '@/backend/controllers/applicationsController';
import { ApplicationType } from '@/types/applicationsTypes';
import Link from 'next/link';
import React, { useState } from 'react';
import StatusDropdown from './StatusDropdown';

function AppCard ({ application }: { application: ApplicationType}) {
    const [status, setStatus] = useState(application.status);

    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setStatus(e.target.value);
        updateApplication({
            ...application,
            status: e.target.value,
        });
    };

    return (
        <section className="app-card">
            <div className="info-ctn">
                <Link href={`/applications/${application.id}`}><h3>{application.jobTitle}</h3></Link>
                <p>{application.company} - {application.location}</p>
                <p>{application.insertionDate.toLocaleString()}</p>
            </div>
            <div className="btn-ctn">
                <StatusDropdown value={status} handleChange={handleStatusChange}/>
                <Link href={`/applications/${application.id}/update`} className="link-btn">E</Link>
                <button onClick={() => deleteApplication(application.id)}>D</button>
            </div>
        </section>
    );
}

export default AppCard;