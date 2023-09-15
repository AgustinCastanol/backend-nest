import { Controller, Get, Query, UseGuards, Req } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { AuthGuard } from '@nestjs/passport';
@UseGuards(AuthGuard('api-key'))
@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}
  @Get()
  findAll(@Query() query: any, @Req() req: any) {
    const { id, limit, page } = query;
    let skip =
      limit == undefined || page == undefined ? 10 : limit * (page - 1);
    const take = limit == undefined ? 10 : limit;
    if (id) {
      return this.cuentasService.findOne(id);
    }
    if (page < 1) {
      skip = 0;
    }
    return this.cuentasService.findAll(skip, take);
  }
}
