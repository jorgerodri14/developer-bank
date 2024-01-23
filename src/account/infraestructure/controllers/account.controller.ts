import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AccountService } from '../services/account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  @Get(':id')
  public async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.accountService.findOne(id);
  }
}
