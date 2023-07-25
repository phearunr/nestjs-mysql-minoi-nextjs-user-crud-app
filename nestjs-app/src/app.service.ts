import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  appVersion() {
    return { appVersion: 1 };
  }
}
