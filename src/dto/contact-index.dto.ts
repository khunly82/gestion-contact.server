import { Contact } from "src/entities/contact";

export class ContactIndexDTO {
    id: number;
    lastName: string;
    firstName: string;
    typeName: string;

    // colonne caculée
    fullName: string;

    constructor(contact: Contact) {
        this.id = contact.id;
        this.lastName = contact.lastName;
        this.firstName = contact.firstName;
        this.typeName = contact.type.intitule;
        this.fullName = contact.lastName + " " + contact.firstName;
    }
}