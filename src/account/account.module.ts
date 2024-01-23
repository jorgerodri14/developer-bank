import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [DatabaseModule],
})
export class AccountModule {}
