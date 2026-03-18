'use client';

import { ApplicationType } from '@/types/applicationsTypes';
import { redirect } from 'next/navigation';
import React from 'react';

function AppCard ({ application }: { application: ApplicationType}) {
    return (
        <section onClick={() => redirect(`/applications/${application.id}`)}>
            <h3>{application.jobTitle}</h3>
            <p>{application.company} - {application.location}</p>
            <p>{application.insertionDate.toString()}</p>
        </section>
    );
}

export default AppCard;