import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, BrowserModule],
  entryComponents: [FeaturesComponent],
  exports: [
    FeaturesComponent
  ],
  bootstrap: environment.production ? [] : [FeaturesComponent]
})
export class FeaturesModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ff4jFeaturesElement = createCustomElement(FeaturesComponent, {injector: this.injector});
    customElements.define('ff4j-features-element', ff4jFeaturesElement);
  }
}
