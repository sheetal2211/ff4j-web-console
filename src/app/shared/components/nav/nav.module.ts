import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NavComponent } from './nav.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [
    NavComponent,
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule {
}
