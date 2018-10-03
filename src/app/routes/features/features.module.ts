import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturesComponent} from './features.component';
import {FeatureService} from '../../shared/services/feature.service';
import {AgGridModule} from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  declarations: [ FeaturesComponent ],
  providers: [ FeatureService ]
})
export class FeaturesModule {
}
