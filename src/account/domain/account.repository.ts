import { Account } from './account';

export interface AccountRepository {
  findOne(id: string): Promise<Account>;
  create(account: Account): Promise<void>;
}
