import {NgModule} from '@angular/core';
import {NavComponent} from './nav.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';
import {RoutesModule} from '../../../routes/routes.module';

@NgModule({
  imports: [
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
