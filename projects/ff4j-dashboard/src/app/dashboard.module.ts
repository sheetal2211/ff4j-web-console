import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, BrowserModule],
  entryComponents: [DashboardComponent],
  bootstrap: environment.loadBootstrap ? [DashboardComponent] : [],
  exports: [DashboardComponent],
})
export class DashboardModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const dashboardElement = createCustomElement(DashboardComponent, {
      injector: this.injector,
    });
    customElements.define('ff4j-dashboard-element', dashboardElement);
  }
}
