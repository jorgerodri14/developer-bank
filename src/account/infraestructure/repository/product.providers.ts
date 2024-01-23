import { DataSource } from 'typeorm';
import { AccountTypeOrmEntity } from '../entities/account.entity';

export const ACCOUNT_REPOSITORY = 'ACCOUNT_REPOSITORY';

export const accountRepositoryProviders = [
  {
    provide: ACCOUNT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AccountTypeOrmEntity),
    inject: ['DATA_SOURCE'],
  },
];
