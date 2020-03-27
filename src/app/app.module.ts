import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from '../../projects/ff4j-features/src/app/features.module';
import { PropertiesModule } from '../../projects/ff4j-properties/src/app/properties.module';
import { DashboardModule } from '../../projects/ff4j-dashboard/src/app/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FeaturesModule, PropertiesModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
