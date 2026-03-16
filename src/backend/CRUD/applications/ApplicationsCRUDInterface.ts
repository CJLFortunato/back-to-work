/* eslint-disable no-unused-vars */
import Application from '@/backend/models/Application';
import { ApplicationCreate } from '@/types/applicationsTypes';

interface ApplicationsCRUD {
    getApplicationsByUserId: (id: number) => Application[] | Promise<Application[]>;
    getApplicationById: (id: number) => Application | Promise<Application>;
    createApplication: (newApp: ApplicationCreate) => Application | Promise<Application>;
}

export default ApplicationsCRUD;