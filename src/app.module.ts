import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact';
import { Type } from './entities/type';
import { Address } from './entities/address';
import { ContactController } from './controllers/contact.controller';
import { TypeController } from './controllers/type.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'test1234=',
      database: 'test',
      synchronize: true,
      options: {
        encrypt: false
      },
      entities: [Contact, Type, Address]
    }),
    TypeOrmModule.forFeature([Contact, Type])
  ],
  controllers: [ContactController, TypeController],
  providers: [],
})
export class AppModule {}
