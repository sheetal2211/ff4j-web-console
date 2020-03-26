import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties.component';
import { environment } from '../environments/environment';


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
export class PropertiesModule { }
