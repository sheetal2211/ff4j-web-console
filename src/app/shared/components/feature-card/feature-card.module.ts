import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureCardComponent} from './feature-card.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatSlideToggleModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    FeatureCardComponent
  ],
  exports: [
    FeatureCardComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FeatureCardModule {
}
