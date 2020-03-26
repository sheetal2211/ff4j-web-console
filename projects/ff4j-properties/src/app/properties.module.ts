import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties.component';
import { environment } from '../environments/environment';
import {createCustomElement} from "@angular/elements";


@NgModule({
  declarations: [PropertiesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PropertiesComponent
  ],
  entryComponents: [PropertiesComponent],
  bootstrap: environment.production ? [] : [PropertiesComponent]
})
export class PropertiesModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ff4jPropertiesElement = createCustomElement(PropertiesComponent, {injector: this.injector});
    customElements.define('ff4j-properties-element', ff4jPropertiesElement);
  }
}
