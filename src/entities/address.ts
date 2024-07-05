import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    street: string;

    @Column({ length: 20 })
    number: string;

    @Column({ length: 4 })
    zipCode: string;

    @Column({ length: 150 })
    city: string;

    @Column({ default: false })
    main: boolean;
    
    @Column()
    contactId: number;

    @ManyToOne(() => Contact, c => c.addresses)
    contact: Contact;
}