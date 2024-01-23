import { Account } from './account';
import { Movement } from './movement';

export interface AccountRepository {
  findOne(id: number, type: Movement): Promise<Account>;
}
