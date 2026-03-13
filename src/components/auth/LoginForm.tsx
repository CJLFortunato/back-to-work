/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useEffect, useState } from 'react';
import Form from 'next/form';
import { loginUser } from '@/backend/controllers/authController';

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
            <label htmlFor="email">Enter your email address</label>
            <input type="email" name="email" id="email" value={formValues.email} onChange={handleChange} required/>
            <label htmlFor="password">Enter your password</label>
            <input type="password" name="password" id="password" value={formValues.password} onChange={handleChange} required/>
            <p className="error">{error}</p>
            <input type="submit" value="Log In" disabled={error !== ''} />
        </Form>
    );
}

export default LoginForm;