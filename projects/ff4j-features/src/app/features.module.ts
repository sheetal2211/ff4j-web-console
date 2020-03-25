import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, BrowserModule],
  entryComponents: [FeaturesComponent],
})
export class FeaturesModule {}
