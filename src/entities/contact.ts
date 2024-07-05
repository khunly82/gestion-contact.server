import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Type } from "./type";
import { Address } from "./address";


@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    lastName: string;

    @Column({ length: 50 })
    firstName: string;

    @Column({ length: 255 })
    email: string;

    @Column({ length: 50 })
    tel: string;

    @Column()
    typeId: number;

    @OneToMany(() => Address, a => a.contact, {cascade: true})
    addresses: Address[]
    
    @ManyToOne(() => Type, t => t.contacts)
    type: Type;

}