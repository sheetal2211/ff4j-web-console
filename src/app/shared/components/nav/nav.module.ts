import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';
import {RoutesModule} from '../../../routes/routes.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RoutesModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule {
}
