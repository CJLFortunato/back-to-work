import AppList from '@/components/applications/AppList';
import React from 'react';

function DashboardPage () {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <AppList />
        </div>
    );
}

export default DashboardPage;