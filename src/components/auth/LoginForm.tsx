/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useEffect, useState } from 'react';
import Form from 'next/form';
import { loginUser } from '@/backend/controllers/authController';
import LabelledInput from '../misc/LabelledInput';

function LoginForm () {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        if (!formValues.email || !formValues.password) setError('Please fill all fields');
        if (formValues.email && formValues.password) setError('');
        console.log(!formValues.email || !formValues.password);
    }, [formValues]);

    return (
        <Form action={loginUser}>
            <LabelledInput
                label="Enter your email address"
                inputType="text"
                name="email"
                value={formValues.email}
                handleChange={handleChange}
                placeholder="ex: janedoe@exemple.com"
            />
            <LabelledInput
                label="Enter your password"
                inputType="password"
                name="password"
                value={formValues.password}
                handleChange={handleChange}
            />
            <p className="error">{error}</p>
            <input type="submit" value="Log In" disabled={error !== ''} />
        </Form>
    );
}

export default LoginForm;