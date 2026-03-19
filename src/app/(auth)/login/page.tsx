import React from 'react';

import LoginForm from '@/components/auth/LoginForm';

function LoginPage () {
    return (
        <div className="logged-in-page">
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
}

export default LoginPage;