import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeORMAccountRepository } from '../repository/account.repositories';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: TypeORMAccountRepository) {}
  public async findOne(id: number) {
    const account = await this.accountRepository.findOne(id);

    if (!account)
      throw new NotFoundException(`Account with id:"${id}" not found`);

    return account;
  }
}
