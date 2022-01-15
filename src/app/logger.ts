import { LoggerInfoService } from './logger-info.service';

export class Logger {
  info: string;

  constructor(public name: string, loggerInfo: LoggerInfoService) {
    this.info = loggerInfo.info;
  }

  log(msg: string): void {
    console.log('logging', this.name, this.info, msg);
  }
}
