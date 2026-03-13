class User {
    id: number;
    email: string;
    name: string;
    insertionDate: Date;
    lastConnexion: Date | null;

    constructor (id: number, email: string, name: string, insertionDate: Date, lastConnexion: Date | null) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.insertionDate = insertionDate;
        this.lastConnexion = lastConnexion;
    }
}

export default User;