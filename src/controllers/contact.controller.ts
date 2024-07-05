import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactDetailledDTO } from 'src/dto/contact-detailled.dto';
import { ContactIndexDTO } from 'src/dto/contact-index.dto';
import { ContactFormDTO } from 'src/dto/forms/contact.form.dto';
import { Contact } from 'src/entities/contact';
import { Repository } from 'typeorm';

@ApiTags('Contact')
@Controller('contact')
export class ContactController {

    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>
    ) {}

    @ApiResponse({ type: () => ContactIndexDTO, isArray: true })
    @Get()
    async getAllContacts() {
        const result = await this.contactRepository.find(
            { relations: ['type'] }
        );
        return result.map(c => new ContactIndexDTO(c));
    }

    @Post()
    async addContact(@Body() form: ContactFormDTO) {
        const count = form.addresses.filter(a => a.main).length;

        if(count !== 1) {
            throw new BadRequestException("Vous devez avoir au moins et au plus une adresse principale");
        }

        await this.contactRepository.save(form);
    }

    @ApiResponse({ type: () => ContactDetailledDTO })
    @ApiParam({ name: 'id', required: true })
    @Get('/:id')
    async getContactById(
        @Param('id', ParseIntPipe) id: number
    ) {
        const contact = await this.contactRepository.findOne({
            where: {id},
            relations: ['type', 'addresses']
        });

        if(!contact) {
            throw new NotFoundException();
        }

        return new ContactDetailledDTO(contact);
    }

    @Put('/:id')
    @ApiParam({ name: 'id', required: true })
    async updateContact(
        @Param('id', ParseIntPipe) id: number,
        @Body() form: ContactFormDTO
    ) {
        const contact = await this.contactRepository.findOne({
            where: {id},
        });

        if(!contact) {
            throw new NotFoundException();
        }

        Object.assign(contact, form);

        await this.contactRepository.save(contact);
    }

    @Delete('/:id')
    @ApiParam({ name: 'id', required: true })
    async deleteContact(
        @Param('id', ParseIntPipe) id: number
    ) {
        const contact = await this.contactRepository.findOne({
            where: {id},
        });

        if(!contact) {
            throw new NotFoundException();
        }

        await this.contactRepository.delete(id);
    }
}
