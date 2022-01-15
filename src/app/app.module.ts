import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoggerInfoService } from './logger-info.service';
import { Logger } from './logger';
import {
  loggerFactoryStaticName,
  loggerFactoryInjectedName,
  LoggerName,
} from './loggerFactory';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    LoggerInfoService,
    // {
    //   provide: LoggerName,
    //   useValue: 'defined on module level',
    // },
    {
      provide: Logger,
      useFactory: loggerFactoryInjectedName('default'),
      deps: [LoggerInfoService],
    },
  ],
})
export class AppModule {}
