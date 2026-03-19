/* eslint-disable camelcase */
import Application from '@/backend/models/Application';
import { ApplicationCreate, ApplicationinDb } from '@/types/applicationsTypes';
import ApplicationsCRUD from './ApplicationsCRUDInterface';
import prisma from '../../../../prisma/prisma';

class ApplicationsCRUDPrisma implements ApplicationsCRUD {
    async getApplicationsByUserId (id: number) {
        const applicationsInDb: ApplicationinDb[] | [] = await prisma.application.findMany({
            where: {user_id: id},
        });

        const applications = [];

        for (const applicationInDb of applicationsInDb) {
            const application = new Application(
                applicationInDb.id,
                applicationInDb.job_title,
                applicationInDb.company,
                applicationInDb.contract_type,
                applicationInDb.location,
                applicationInDb.salary_min,
                applicationInDb.salary_max,
                applicationInDb.notes,
                applicationInDb.status,
                applicationInDb.hired,
                applicationInDb.closure_date,
                applicationInDb.archival_date,
                applicationInDb.insertion_date,
                applicationInDb.active,
                applicationInDb.user_id,
            );

            applications.push(application);
        }


        return applications;
    };

    async getApplicationById (id: number) {
        const applicationInDb: ApplicationinDb | null = await prisma.application.findUnique({
            where: {id: id},
        });

        if (!applicationInDb) throw new Error('Application not found');

        const application = new Application(
            applicationInDb.id,
            applicationInDb.job_title,
            applicationInDb.company,
            applicationInDb.contract_type,
            applicationInDb.location,
            applicationInDb.salary_min,
            applicationInDb.salary_max,
            applicationInDb.notes,
            applicationInDb.status,
            applicationInDb.hired,
            applicationInDb.closure_date,
            applicationInDb.archival_date,
            applicationInDb.insertion_date,
            applicationInDb.active,
            applicationInDb.user_id,
        );

        return application;
    };

    async createApplication (newApp: ApplicationCreate) {
        const appInDb = await prisma.application.create({
            data: {
                job_title: newApp.jobTitle,
                company: newApp.company,
                contract_type: newApp.contractType,
                location: newApp.location,
                salary_min: newApp.salaryMin,
                salary_max: newApp.salaryMax,
                notes: newApp.notes,
                status: newApp.status,
                hired: newApp.hired,
                closure_date: newApp.closureDate,
                archival_date: newApp.archivalDate,
                active: newApp.active,
                user_id: newApp.userId,
            },
        });

        const application = new Application(
            appInDb.id,
            appInDb.job_title,
            appInDb.company,
            appInDb.contract_type,
            appInDb.location,
            appInDb.salary_min,
            appInDb.salary_max,
            appInDb.notes,
            appInDb.status,
            appInDb.hired,
            appInDb.closure_date,
            appInDb.archival_date,
            appInDb.insertion_date,
            appInDb.active,
            appInDb.user_id,
        );

        return application;
    };

    async updateApplication (newApp: Application) {
        const appInDb = await prisma.application.update({
            where: {id: newApp.id},
            data: {
                job_title: newApp.jobTitle,
                company: newApp.company,
                contract_type: newApp.contractType,
                location: newApp.location,
                salary_min: newApp.salaryMin,
                salary_max: newApp.salaryMax,
                notes: newApp.notes,
                status: newApp.status,
                hired: newApp.hired,
                closure_date: newApp.closureDate,
                archival_date: newApp.archivalDate,
                active: newApp.active,
                user_id: newApp.userId,
            },
        });

        const application = new Application(
            appInDb.id,
            appInDb.job_title,
            appInDb.company,
            appInDb.contract_type,
            appInDb.location,
            appInDb.salary_min,
            appInDb.salary_max,
            appInDb.notes,
            appInDb.status,
            appInDb.hired,
            appInDb.closure_date,
            appInDb.archival_date,
            appInDb.insertion_date,
            appInDb.active,
            appInDb.user_id,
        );

        return application;
    }

    async deleteApplication (id: number) {
        await prisma.application.delete({
            where: { id: id},
        });
    }

}

export default ApplicationsCRUDPrisma;