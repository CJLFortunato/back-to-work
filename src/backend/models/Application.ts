import Contact from './Contact';
import Interview from './Interview';
import Tag from './Tag';

class Application {
    id: number;
    jobTitle: string;
    company: string | null;
    contractType: string | null;
    location: string | null;
    salaryMin: number | null;
    salaryMax: number | null;
    notes: string | null;
    status: string;
    hired: boolean | null;
    closureDate: Date | null;
    archivalDate: Date | null;
    insertionDate: Date;
    active: boolean;
    userId: number;
    tags: Tag[] = [];
    interviews: Interview[] = [];
    contacts: Contact[] = [];

    constructor (
        id: number,
        jobTitle: string,
        company: string | null,
        contractType: string | null,
        location: string | null,
        salaryMin: number | null,
        salaryMax: number | null,
        notes: string | null,
        status: string,
        hired: boolean | null,
        closureDate: Date | null,
        archivalDate: Date | null,
        insertionDate: Date,
        active: boolean,
        userId: number,
        tags?: Tag[],
        interviews?: Interview[],
        contacts?: Contact[],
    ) {

        this.id = id;
        this.jobTitle = jobTitle;
        this.company = company;
        this.contractType = contractType;
        this.location = location;
        this.salaryMin = salaryMin;
        this.salaryMax = salaryMax;
        this.notes = notes;
        this.status = status;
        this.hired = hired;
        this.closureDate = closureDate;
        this.archivalDate = archivalDate;
        this.insertionDate = insertionDate;
        this.active = active;
        this.userId = userId;
        this.tags = tags || [];
        this.interviews = interviews || [];
        this.contacts = contacts || [];

    }
}

export default Application;