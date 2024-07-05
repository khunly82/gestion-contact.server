import { IsArray, IsEmail, IsNotEmpty, IsNumber, Matches, MaxLength, MinLength, ValidateNested } from "class-validator";
import { AddressFormDTO } from "./address.form.dto";
import { ApiProperty } from "@nestjs/swagger";

export class ContactFormDTO {

    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(50)
    @ApiProperty()
    lastName: string;

    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(50)
    @ApiProperty()
    firstName: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;

    @Matches(/^\+3(2|3)([0-9]+)$/)
    @ApiProperty()
    tel: string;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    typeId: number;

    @IsArray()
    @ValidateNested()
    @ApiProperty({type: () => AddressFormDTO, isArray: true})
    addresses: AddressFormDTO[];
}