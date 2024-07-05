import { Address } from "src/entities/address";
import { ContactIndexDTO } from "./contact-index.dto";
import { Contact } from "src/entities/contact";
import { Type } from "src/entities/type";

export class ContactDetailledDTO extends ContactIndexDTO {
    email: string;
    tel: string;
    addresses: Address[];
    type: Type;
    typeId: number;

    constructor(contact: Contact) {
        super(contact);
        this.email = contact.email;
        this.tel = contact.tel;
        this.addresses = contact.addresses;
        this.type = contact.type;
        this.typeId = contact.type.id;
    }
}