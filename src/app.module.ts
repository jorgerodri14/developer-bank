import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { DatabaseModule } from './database/database.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [ConfigModule.forRoot(), AccountModule, SeedModule, DatabaseModule],
})
export class AppModule {}
