import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeDTO } from 'src/dto/type.dto';
import { TypeFormDTO } from 'src/dto/forms/type.form.dto';
import { Type } from 'src/entities/type';
import { Repository } from 'typeorm';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Type')
@Controller('type')
export class TypeController {

    constructor(
        @InjectRepository(Type)
        private typeRepository: Repository<Type>
    ) {}

    @ApiResponse({ type: () => TypeDTO, isArray: true })
    @Get()
    async getAllTypes() {
        const result = await this.typeRepository.find();
        return result.map(t => new TypeDTO(t));
    }

    @Post()
    async addType(@Body()form: TypeFormDTO) {
        await this.typeRepository.save(form);
    }
}
