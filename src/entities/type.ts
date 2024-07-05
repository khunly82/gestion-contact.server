import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact";

@Entity()
export class Type {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, unique: true, nullable: false })
    intitule: string;

    @OneToMany(() => Contact, c => c.type)
    contacts: Contact[];
} 