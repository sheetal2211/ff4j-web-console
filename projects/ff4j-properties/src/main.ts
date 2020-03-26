import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {PropertiesModule} from "./app/properties.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PropertiesModule, {
  defaultEncapsulation: ViewEncapsulation.ShadowDom
})
  .catch(err => console.error(err));
