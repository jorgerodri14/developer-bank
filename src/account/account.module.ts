import { Module } from '@nestjs/common';
import { AccountService } from './infraestructure/services/account.service';
import { AccountController } from './infraestructure/controllers/account.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TypeORMAccountRepository } from './infraestructure/repository/account.repositories';
import { accountRepositoryProviders } from './infraestructure/repository/product.providers';

@Module({
  controllers: [AccountController],
  providers: [
    ...accountRepositoryProviders,
    AccountService,
    TypeORMAccountRepository,
  ],
  imports: [DatabaseModule],
  exports: [AccountService],
})
export class AccountModule {}
