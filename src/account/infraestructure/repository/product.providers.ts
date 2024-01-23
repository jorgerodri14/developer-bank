import { DataSource } from 'typeorm';
import { TypeORMAccountRepository } from './account.repositories';

export const ACCOUNT_REPOSITORY = 'ACCOUNT_REPOSITORY';

export const accountRepositoryProviders = [
  {
    provide: ACCOUNT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TypeORMAccountRepository),
    inject: ['DATA_SOURCE'],
  },
];
