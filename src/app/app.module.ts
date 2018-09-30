import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoutesModule} from './routes/routes.module';
import {NavModule} from './shared/components/nav/nav.module';
import {FeaturesModule} from './routes/features/features.module';
import {PropertiesModule} from './routes/properties/properties.module';
import {DashboardModule} from './routes/dashboard/dashboard.module';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel.INFO }),
    NavModule,
    FeaturesModule,
    PropertiesModule,
    DashboardModule
  ],
  providers: [
    // add your providers
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
