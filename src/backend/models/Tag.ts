import Application from './Application';

class Tag {
    id:number;
    label: string;
    insertionDate: Date;
    applications: Application[] = [];

    constructor (
        id:number,
        label: string,
        insertionDate: Date,
        applications: Application[],
    ) {
        this.id = id;
        this.label = label;
        this.insertionDate = insertionDate;
        this.applications = applications;

    }
}

export default Tag;