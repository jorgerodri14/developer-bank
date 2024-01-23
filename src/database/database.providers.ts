import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true, //esto no lo queremos en prod
      });

      return dataSource.initialize();
    },
  },
];
