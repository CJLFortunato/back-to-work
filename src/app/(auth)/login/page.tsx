import React from 'react';

import Link from 'next/link';

function LoginPage () {
    return (
        <div>
            <h1>Login</h1>
            <Link href="/applications">Login</Link>
        </div>
    );
}

export default LoginPage;