import { Inject, Injectable } from '@nestjs/common';
import { Account } from 'src/account/domain/account';
import { AccountRepository } from 'src/account/domain/account.repository';
import { Repository } from 'typeorm';
import { CreateAccountDto } from '../dtos/create-account.dto';
import { ACCOUNT_REPOSITORY } from './product.providers';

@Injectable()
export class TypeORMAccountRepository implements AccountRepository {
  constructor(
    @Inject(ACCOUNT_REPOSITORY)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    const account = this.accountRepository.create(createAccountDto);

    await this.accountRepository.save(account);
  }

  async findOne(id: string): Promise<Account> {
    return await this.accountRepository.findOneBy({ id });
  }
}
