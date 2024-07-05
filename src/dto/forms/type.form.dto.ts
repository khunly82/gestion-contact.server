import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";

export class TypeFormDTO {
    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(50)
    intitule: string;
}