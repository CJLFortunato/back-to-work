class Interview {
    id:number;
    label: string;
    insertionDate: Date;
    interviewer: string | null;
    notes: string | null;
    applicationId: number;

    constructor (
        id:number,
        label: string,
        insertionDate: Date,
        interviewer: string | null,
        notes: string | null,
        applicationId: number,
    ) {
        this.id = id;
        this.label = label;
        this.insertionDate = insertionDate;
        this.interviewer = interviewer;
        this.notes = notes;
        this.applicationId = applicationId;

    }
}

export default Interview;