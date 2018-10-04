import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturesComponent} from './features.component';
import {FeatureService} from '../../shared/services/feature.service';
import {AgGridModule} from 'ag-grid-angular';
import {FeatureCardModule} from '../../shared/components/feature-card/feature-card.module';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    FeatureCardModule
  ],
  declarations: [
    FeaturesComponent
  ],
  providers: [ FeatureService ]
})
export class FeaturesModule {
}
