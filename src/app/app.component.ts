import { Component, VERSION } from '@angular/core';
import { Logger } from './logger';
import { LoggerInfoService } from './logger-info.service';
import { loggerFactoryInjectedName, LoggerName } from './loggerFactory';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // {
    //   provide: LoggerName,
    //   useValue: 'defined on component',
    // },

    {
      provide: Logger,
      useFactory: loggerFactoryInjectedName(AppComponent.name),
      deps: [LoggerInfoService],
    },
  ],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private logger: Logger) {
    console.log(this.logger);
    //this.logger.log('AppComponent.constructor');
  }
}
