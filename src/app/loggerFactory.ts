import { Logger } from './logger';
import { LoggerInfoService } from './logger-info.service';

export class LoggerName {}

// export function loggerFactoryInjectedName(
//   loggerName: string,
//   loggerInfoService: LoggerInfoService
// ): Logger {
//   return new Logger(loggerName, loggerInfoService);
// }

export function loggerFactoryInjectedName(loggerName: string) {
  console.log('Factory outer called');

  return (loggerInfoService: LoggerInfoService): Logger => {
    console.log('Factory inner called');
    return new Logger(loggerName, loggerInfoService);
  };
}

export function loggerFactoryStaticName(
  loggerInfoService: LoggerInfoService
): Logger {
  return new Logger('hard-coded-name', loggerInfoService);
}

export function runnersUpFactory(take: number) {
  return (winner: any, heroService: any): string => {
    /* ... */
    return heroService
      .getAllHeroes()
      .filter((hero) => hero.name !== winner.name)
      .map((hero) => hero.name)
      .slice(0, Math.max(0, take))
      .join(', ');
  };
}
