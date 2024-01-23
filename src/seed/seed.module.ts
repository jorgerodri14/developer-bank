import { Module } from '@nestjs/common';
import { AccountModule } from 'src/account/account.module';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [AccountModule],
})
export class SeedModule {}
