import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from '../../projects/ff4j-features/src/app/features.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FeaturesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
