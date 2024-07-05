import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class AddressFormDTO {
    @IsNotEmpty()
    @MaxLength(255)
    @ApiProperty()
    street: string;

    @IsNotEmpty()
    @MaxLength(20)
    @ApiProperty()
    number: string;

    @IsNotEmpty()
    @MaxLength(4)
    @MinLength(4)
    @ApiProperty()
    zipCode: string;

    @IsNotEmpty()
    @MaxLength(150)
    @ApiProperty()
    city: string;

    @ApiProperty()
    main: boolean;
}