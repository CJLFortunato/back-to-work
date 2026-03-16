import Tag from '@/backend/models/Tag';
import Interview from '@/backend/models/Interview';
import Contact from '@/backend/models/Contact';

export type ApplicationinDb = {
    id: number;
    job_title: string;
    company: string | null;
    contract_type: string | null;
    location: string | null;
    salary_min: number | null;
    salary_max: number | null;
    notes: string | null;
    status: string;
    hired: boolean | null;
    closure_date: Date | null;
    archival_date: Date | null;
    insertion_date: Date;
    active: boolean;
    user_id: number;
};

export type ApplicationCreate = {
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
    active: boolean;
    userId: number;
    tags: Tag[];
    interviews: Interview[];
    contacts: Contact[];
};