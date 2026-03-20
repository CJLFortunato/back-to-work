/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import {updateApplication } from '@/backend/controllers/applicationsController';
import Form from 'next/form';
import React, { useEffect, useState } from 'react';
import LabelledInput from '../misc/LabelledInput';
import Application from '@/backend/models/Application';

type UpdateFormProps = {
    app: Application,
};

function UpdateForm(props: UpdateFormProps) {
    const { app } = props;
    const [formValues, setFormValues] = useState<Application>({
            ...app,
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
        <Form onSubmit={(e) => {e.preventDefault(); updateApplication(formValues, `/applications/${app.id}`);}} action="">
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
                value={formValues.company || undefined}
                handleChange={handleChange}
                placeholder="ex: ACME"
            />
            <LabelledInput
                label="Contract type"
                inputType="text"
                name="contractType"
                value={formValues.contractType || undefined}
                handleChange={handleChange}
                placeholder="ex: Salaried, freelance, CDI..."
            />
            <LabelledInput
                label="Location"
                inputType="text"
                name="location"
                value={formValues.location || undefined}
                handleChange={handleChange}
                placeholder="ex: New York, Paris, Shangai..."
            />
            <LabelledInput
                label="Minimum Salary offered"
                inputType="number"
                name="salaryMin"
                value={formValues.salaryMin || undefined}
                handleChange={handleChange}
            />
            <LabelledInput
                label="Maximum Salary offered"
                inputType="number"
                name="salaryMax"
                value={formValues.salaryMax || undefined}
                handleChange={handleChange}
            />
            <select name="status" id="status" value={formValues.status} onChange={handleChange}>
                <option value="created" title="You have not yet sent this application">Created</option>
                <option value="in-progress" title="You have sent this application to a potential employer">
                    In Progress
                </option>
            </select>
            <textarea name="notes" id="notes" value={formValues.notes || undefined} onChange={handleChange}/>
            <p className="error">{error}</p>
            <input type="submit" value="Update application" disabled={error !== ''} />
        </Form>
    );
}

export default UpdateForm;