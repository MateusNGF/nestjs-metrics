import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloWord() {
    return "Hello World!";
  }
}
