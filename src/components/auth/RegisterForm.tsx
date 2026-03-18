/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useEffect, useState } from 'react';
import Form from 'next/form';
import { registerUser } from '@/backend/controllers/authController';
import { checkPasswordsMatch } from '@/validation/formValidation/registerFormValidation';
import LabelledInput from '../misc/LabelledInput';

function RegisterForm () {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        if (!formValues.email) setError('Please fill all fields');
        if (!formValues.name) setError('Please fill all fields');
        setError(checkPasswordsMatch(formValues.password, formValues.password2));
    }, [formValues]);

    return (
        <Form action={registerUser}>
            <LabelledInput
                label="Enter your email address"
                inputType="text"
                name="email"
                value={formValues.email}
                handleChange={handleChange}
                placeholder="ex: janedoe@exemple.com"
            />
            <LabelledInput
                label="Enter your name"
                inputType="text"
                name="name"
                value={formValues.name}
                handleChange={handleChange}
                placeholder="Give us something to call you by!"
            />
            <LabelledInput
                label="Enter your password"
                inputType="password"
                name="password"
                value={formValues.password}
                handleChange={handleChange}
            />
            <LabelledInput
                label="Confirm your password"
                inputType="password"
                name="password2"
                value={formValues.password2}
                handleChange={handleChange}
            />
            <p className="error">{error}</p>
            <input type="submit" value="Create your account" disabled={error !== ''} />
        </Form>
    );
}

export default RegisterForm;