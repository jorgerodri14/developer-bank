import { Account } from 'src/account/domain/account';
import { EntitySchema } from 'typeorm';

export const AccountTypeOrmEntity = new EntitySchema<Account>({
  name: 'Account',
  tableName: 'accounts',
  target: Account,
  columns: {
    id: {
      type: 'text',
      primary: true,
    },
    accountNumber: {
      type: 'text',
    },
  },
});
