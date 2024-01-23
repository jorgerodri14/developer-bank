import { Account } from 'src/account/domain/account';
import { EntitySchema } from 'typeorm';

export const AccountTypeOrmEntity = new EntitySchema<Account>({
  name: 'Account',
  tableName: 'accounts',
  target: Account,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    accountNumber: {
      type: 'text',
    },
  },
});
