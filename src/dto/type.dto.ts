import { Type } from "src/entities/type";

export class TypeDTO {
    id: number;
    intitule: string;

    constructor(type: Type) {
        this.id = type.id;
        this.intitule = type.intitule;
    }
}