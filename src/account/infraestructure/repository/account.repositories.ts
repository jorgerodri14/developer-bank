import { Inject, Injectable } from '@nestjs/common';
import { Account } from 'src/account/domain/account';
import { AccountRepository } from 'src/account/domain/account.repository';
import { Repository } from 'typeorm';
import { ACCOUNT_REPOSITORY } from './product.providers';

@Injectable()
export class TypeORMAccountRepository implements AccountRepository {
  constructor(
    @Inject(ACCOUNT_REPOSITORY)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async findOne(id: number): Promise<Account> {
    try {
      const account = await this.accountRepository.findOneBy({ id });
      return account;
    } catch (error) {
      console.log(error);
    }
  }
}
