import { Controller, Get, Query, UseGuards, Req } from '@nestjs/common';
import { FiscalesService } from './fiscales.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('api-key'))
@Controller('fiscales')
export class FiscalesController {
  constructor(private readonly fiscalesService: FiscalesService) {}

  @Get()
  find(@Query() query: any, @Req() req: any) {
    const acceptHeader = req.headers.accept;
    const { id, limit, page } = query;
    let skip =
      limit == undefined || page == undefined ? 10 : limit * (page - 1);
    const take = limit == undefined ? 10 : limit;
    if (id) {
      return this.fiscalesService.findOne(id);
    }
    if (page < 1) {
      skip = 0;
    }
    if (acceptHeader == 'application/json' || acceptHeader == '*/*') {
      return this.fiscalesService.findAll(skip, take);
    } else if (acceptHeader == 'application/json+solo.fiscales') {
      return this.fiscalesService.findAllSoloFiscales(skip, take);
    }
  }
}
