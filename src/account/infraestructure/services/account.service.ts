import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateAccountDto } from '../dtos/create-account.dto';
import { TypeORMAccountRepository } from '../repository/account.repositories';

@Injectable()
export class AccountService {
  private readonly logger = new Logger('ProductsService');

  constructor(private readonly accountRepository: TypeORMAccountRepository) {}
  public async findOne(id: string) {
    try {
      const account = await this.accountRepository.findOne(id);

      if (!account)
        throw new NotFoundException(`Account with id:"${id}" not found`);

      return account;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        'Unexpected error, check server logs',
      );
    }
  }

  public async create(account: CreateAccountDto) {
    try {
      await this.accountRepository.create(account);
    } catch (error) {
      this.logger.error(error);

      throw new InternalServerErrorException(
        'Unexpected error, check server logs',
      );
    }
  }
}
