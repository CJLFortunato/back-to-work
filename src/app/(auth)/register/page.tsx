import React from 'react';

// import Link from 'next/link';
import RegisterForm from '@/components/auth/RegisterForm';

function RegisterPage () {
    return (
        <div className="logged-in-page">
            <h1>Register</h1>
            <RegisterForm />
        </div>
    );
}

export default RegisterPage;