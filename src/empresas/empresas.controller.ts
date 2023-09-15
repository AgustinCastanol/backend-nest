import { Controller, Get, Query, UseGuards, Req } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('api-key'))
@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}
  @Get()
  find(@Query() query: any, @Req() req: any) {
    const acceptHeader = req.headers.accept;
    const { id, limit, page, start_date } = query;
    let end_date = query.end_date;
    let skip =
      limit == undefined || page == undefined ? 10 : limit * (page - 1);
    const take = limit == undefined ? 10 : limit;
    if (page < 1) {
      skip = 0;
    }
    if (acceptHeader == 'application/json' || acceptHeader == '*/*') {
      if (id) {
        return this.empresasService.findOne(id);
      }

      if (start_date) {
        if (!end_date) {
          end_date = new Date().toISOString().slice(0, 10);
          console.log(end_date);
        }
        return this.empresasService.findByDate(
          skip,
          take,
          start_date,
          end_date,
        );
      }
      return this.empresasService.findAll(skip, take);
    } else if (acceptHeader == 'application/json+solo.empresas') {
      return this.empresasService.findAllSoloEmpresas(skip, take);
    }
  }
}
