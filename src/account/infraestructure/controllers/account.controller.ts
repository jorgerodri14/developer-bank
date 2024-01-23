import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { AccountService } from '../services/account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  @Get(':id')
  public async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.accountService.findOne(id);
  }
}
