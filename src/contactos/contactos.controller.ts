import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { ContactosService } from './contactos.service';
// import { CreateContactoDto } from './dto/create-contacto.dto';
import { AuthGuard } from '@nestjs/passport';
// import { UpdateContactoDto } from './dto/update-contacto.dto';
@UseGuards(AuthGuard('api-key'))
@Controller('contactos')
export class ContactosController {
  constructor(private readonly contactosService: ContactosService) {}

  @Get()
  find(@Query() query: any, @Req() req: any) {
    const acceptHeader = req.headers.accept;
    const { id, limit, page, idEmpresa, start_date } = query;
    let end_date = query.end_date;
    let skip =
      limit == undefined || page == undefined ? 10 : limit * (page - 1);
    const take = limit == undefined ? 10 : limit;

    if (idEmpresa) {
      return this.contactosService.findByIDEmpresa(idEmpresa);
    }
    if (id) {
      return this.contactosService.findOne(id);
    }
    if (page < 1) {
      skip = 0;
    }
    if (start_date) {
      if (!end_date) {
        end_date = new Date().toISOString().slice(0, 10);
        console.log(end_date);
      }
      if (acceptHeader == 'application/json' || acceptHeader == '*/*') {
        console.log('json');
        return this.contactosService.findByDate(
          skip,
          take,
          start_date,
          end_date,
        );
      } else if (acceptHeader == 'application/json+solo.contactos') {
        console.log('solo contactos');
        return this.contactosService.findByDateSoloCuentas(
          skip,
          take,
          start_date,
          end_date,
        );
      }
    }

    return this.contactosService.findAll(skip, take);
  }
}
