import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/infraestructure/services/account.service';
import { initialData } from './data/seed-data';
import { v4 as uuid } from 'uuid';

@Injectable()
export class SeedService {
  constructor(private readonly accountService: AccountService) {}

  async run() {
    await this.insertNewAccounts();

    return 'SEED EXECUTED';
  }

  private async insertNewAccounts() {
    const accounts = initialData.accounts;

    const insertPromises = [];

    accounts.forEach((account) => {
      insertPromises.push(
        this.accountService.create({
          accountNumber: account.accountNumber,
          id: uuid(),
        }),
      );
    });

    await Promise.all(insertPromises);

    return true;
  }
}
