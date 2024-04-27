import { Injectable } from '@nestjs/common';
import { createReadStream, readFileSync } from 'fs';

@Injectable()
export class AppService {
  readFileUsingStream() {
    return createReadStream('./content/users_mock_test.csv')
  }
}
