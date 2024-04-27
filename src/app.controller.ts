import { Controller, Get, Res ,StreamableFile} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getFileStream(@Res() res: Response) {
    const stream = this.appService.readFileUsingStream();
    return new StreamableFile(stream);
  }
}
