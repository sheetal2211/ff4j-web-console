import { enableProdMode, ViewEncapsulation } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { DashboardModule } from "./app/dashboard.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(DashboardModule, {
    defaultEncapsulation: ViewEncapsulation.ShadowDom,
  })
  .catch((err) => console.error(err));
