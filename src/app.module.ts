import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), AccountModule, DatabaseModule],
})
export class AppModule {}
