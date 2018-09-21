import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturesComponent} from './features.component';
import {FeatureService} from '../../shared/services/feature.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ FeaturesComponent ],
  providers: [ FeatureService ]
})
export class FeaturesModule {
}
