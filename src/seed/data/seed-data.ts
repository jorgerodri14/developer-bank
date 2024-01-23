import { Account } from 'src/account/domain/account';

interface SeedData {
  accounts: Pick<Account, 'accountNumber'>[];
}
export const initialData: SeedData = {
  accounts: [
    {
      accountNumber: '111111111111',
    },
    {
      accountNumber: '222222222222',
    },
    {
      accountNumber: '333333333333',
    },
    {
      accountNumber: '444444444444',
    },
    {
      accountNumber: '555555555555',
    },
    {
      accountNumber: '666666666666',
    },
    {
      accountNumber: '777777777777',
    },
    {
      accountNumber: '888888888888',
    },
    {
      accountNumber: '999999999999',
    },
  ],
};
