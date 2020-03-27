import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, BrowserModule],
  entryComponents: [DashboardComponent],
  bootstrap: [DashboardComponent],
})
export class DashboardModule {}
