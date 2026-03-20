'use server';

import { ApplicationCreate } from '@/types/applicationsTypes';
import ApplicationsCRUDPrisma from '../CRUD/applications/ApplicationsCRUDPrisma';
import ApplicationsService from '../services/ApplicationsService';
import { redirect } from 'next/navigation';
import Application from '../models/Application';

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
        company: formData.get('company')?.toString() || null,
        contractType: formData.get('contractType')?.toString() || null,
        location: formData.get('location')?.toString() || null,
        salaryMin: formData.get('salaryMin')? parseFloat(formData.get('salaryMin')?.toString() || '0') : null,
        salaryMax: formData.get('salaryMax')? parseFloat(formData.get('salaryMax')?.toString() || '0') : null,
        notes: formData.get('notes')?.toString() || null,
        status: formData.get('status')?.toString() || 'created',
        hired: null,
        closureDate: null,
        archivalDate: null,
        active: true,
        userId: parseInt(formData.get('userId')?.toString() || '0'),
        tags: [],
        contacts: [],
        interviews: [],
    };

    // eslint-disable-next-line no-useless-assignment
    let canRedirect = false;
    try {
        await appService.createApplication(newApp);
        canRedirect = true;
    } catch (error) {
        console.error(error);
        throw new Error('Error creating application');
    }
    if (canRedirect) return redirect('/applications');
};

export async function updateApplication (newApp: Application, redirectAddress: string = '') {
    console.log(newApp);
    try {
        await appService.updateApplication(newApp);
    } catch (error) {
        console.error(error);
        throw new Error('Error updating application');
    }
    if (redirectAddress) return redirect(redirectAddress);
}

export async function deleteApplication (id: number) {
    try {
        await appService.deleteApplication(id);
    } catch (e) {
        console.error(e);
        throw new Error('An error occured while deleting the application');
    }

    return redirect('/applications');
}