class Contact {
    id:number;
    label: string;
    insertionDate: Date;
    contactee: string | null;
    means: string | null;
    notes: string | null;
    applicationId: number;

    constructor (
        id:number,
        label: string,
        insertionDate: Date,
        contactee: string | null,
        means: string | null,
        notes: string | null,
        applicationId: number,
    ) {
        this.id = id;
        this.label = label;
        this.insertionDate = insertionDate;
        this.contactee = contactee;
        this.means = means;
        this.notes = notes;
        this.applicationId = applicationId;

    }
}

export default Contact;