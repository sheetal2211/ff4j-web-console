import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, BrowserModule],
  entryComponents: [FeaturesComponent],
  exports: [
    FeaturesComponent
  ],
  bootstrap: environment.production ? [] : [FeaturesComponent]
})
export class FeaturesModule {}
