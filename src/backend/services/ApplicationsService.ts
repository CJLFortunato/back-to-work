import ApplicationsCRUD from '../CRUD/applications/ApplicationsCRUDInterface';
import { ApplicationCreate } from '@/types/applicationsTypes';
import Application from '../models/Application';

class ApplicationsService {
  appCRUD: ApplicationsCRUD;

  constructor (appCRUD: ApplicationsCRUD) {
    this.appCRUD = appCRUD;
  }

  async getApplicationById(id: number): Promise<Application> {
    let application: Application;
    try {
      application = await this.appCRUD.getApplicationById(id);

    }
    catch (error) {
      console.error(error);
      throw new Error('An error has occured while fetching application data');
    }
    return application;
  }

  async createApplication(newApp: ApplicationCreate): Promise<Application> {
    let application: Application;

    try {
      application = await this.appCRUD.createApplication(newApp);
    }
    catch (error) {
      console.error(error);
      throw new Error('An error has occured while creating application');
    }

    return application;
  }

  async getApplicationsByUserId(id: number): Promise<Application[]> {
    let applications: Application[];
    try {
      applications = await this.appCRUD.getApplicationsByUserId(id);

    }
    catch (error) {
      console.error(error);
      throw new Error('An error has occured while fetching applications');
    }
    return applications;
  }
}

export default ApplicationsService;