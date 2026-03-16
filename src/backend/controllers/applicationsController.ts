'use server';

import { ApplicationCreate } from '@/types/applicationsTypes';
import ApplicationsCRUDPrisma from '../CRUD/applications/ApplicationsCRUDPrisma';
import ApplicationsService from '../services/ApplicationsService';

const appCRUD = new ApplicationsCRUDPrisma();
const appService = new ApplicationsService(appCRUD);

export async function getApplicationsByUserId (id: number) {
    const applications = await appService.getApplicationsByUserId(id);
    return applications;
};

export async function getApplicationById (id: number) {
    const application = await appService.getApplicationById(id);
    return application;
};

export async function createApplication (formData: FormData) {
    const newApp: ApplicationCreate = {
        jobTitle: formData.get('jobTitle')?.toString() || '',
        company: formData.get('company')?.toString() || '',
        contractType: formData.get('contractType')?.toString() || '',
        location: formData.get('location')?.toString() || '',
        salaryMin: formData.get('salaryMin')? parseFloat(formData.get('salaryMin')?.toString() || '') : null,
        salaryMax: formData.get('salaryMax')? parseFloat(formData.get('salaryMax')?.toString() || '') : null,
        notes: formData.get('jobTitle')?.toString() || '',
        status: formData.get('jobTitle')?.toString() || '',
        hired: null,
        closureDate: null,
        archivalDate: null,
        active: true,
        userId: parseInt(formData.get('userId')?.toString() || '0'),
        tags: [],
        contacts: [],
        interviews: [],
    };
    const applications = await appService.createApplication(newApp);
    return applications;
};