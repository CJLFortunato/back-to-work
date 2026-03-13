/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useEffect, useState } from 'react';
import Form from 'next/form';
import { registerUser } from '@/backend/controllers/authController';
import { checkPasswordsMatch } from '@/validation/formValidation/registerFormValidation';

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
            <label htmlFor="email">Enter your email address</label>
            <input type="email" name="email" id="email" value={formValues.email} onChange={handleChange} required/>
            <label htmlFor="name">Enter your name</label>
            <input type="text" name="name" id="name" value={formValues.name} onChange={handleChange} required/>
            <label htmlFor="password">Enter your password</label>
            <input type="password" name="password" id="password" value={formValues.password} onChange={handleChange} required/>
            <label htmlFor="password2">Confirm your password</label>
            <input type="password" name="password2" id="password2" value={formValues.password2} onChange={handleChange} required/>
            <p className="error">{error}</p>
            <input type="submit" value="Create your account" disabled={error !== ''} />
        </Form>
    );
}

export default RegisterForm;