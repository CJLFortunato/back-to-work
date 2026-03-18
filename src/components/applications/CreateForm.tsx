/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { createApplication } from '@/backend/controllers/applicationsController';
import Form from 'next/form';
import React, { useEffect, useState } from 'react';
import LabelledInput from '../misc/LabelledInput';

function CreateForm({ userId }: {userId: number}) {
    const [formValues, setFormValues] = useState({
            jobTitle: '',
            company: '',
            contractType: '',
            location: '',
            salaryMin: 0,
            salaryMax: 0,
            notes: '',
            status: 'created',
            userId,
        });
        const [error, setError] = useState('');

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
            setFormValues(prev => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        };

        useEffect(() => {
            if (!formValues.jobTitle) setError('Please fill Job Title field');
            if (formValues.jobTitle) setError('');
        }, [formValues]);

    return (
        <Form action={createApplication}>
            <LabelledInput
                label="Job Title"
                inputType="text"
                name="jobTitle"
                value={formValues.jobTitle}
                handleChange={handleChange}
                placeholder="ex: Web developper"
            />
            <LabelledInput
                label="Company"
                inputType="text"
                name="company"
                value={formValues.company}
                handleChange={handleChange}
                placeholder="ex: ACME"
            />
            <LabelledInput
                label="Contract type"
                inputType="text"
                name="contractType"
                value={formValues.contractType}
                handleChange={handleChange}
                placeholder="ex: Salaried, freelance, CDI..."
            />
            <LabelledInput
                label="Location"
                inputType="text"
                name="location"
                value={formValues.location}
                handleChange={handleChange}
                placeholder="ex: New York, Paris, Shangai..."
            />
            <LabelledInput
                label="Minimum Salary offered"
                inputType="number"
                name="salaryMin"
                value={formValues.salaryMin}
                handleChange={handleChange}
            />
            <LabelledInput
                label="Maximum Salary offered"
                inputType="number"
                name="salaryMax"
                value={formValues.salaryMax}
                handleChange={handleChange}
            />
            <select name="status" id="status" value={formValues.status} onChange={handleChange}>
                <option value="created" title="You have not yet sent this application">Created</option>
                <option value="in-progress" title="You have sent this application to a potential employer">
                    In Progress
                </option>
            </select>
            <textarea name="notes" id="notes" value={formValues.notes} onChange={handleChange}/>
            <input type="hidden" name="userId" value={formValues.userId}/>
            <p className="error">{error}</p>
            <input type="submit" value="Create application" disabled={error !== ''} />
        </Form>
    );
}

export default CreateForm;