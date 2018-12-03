import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturesComponent} from './features.component';
import {FeatureService} from '../../shared/services/feature.service';
import {AgGridModule} from 'ag-grid-angular';
import {FeatureCardModule} from '../../shared/components/feature-card/feature-card.module';
import {FeatureRendererComponent} from './feature-renderer.component';
import {MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {PaginatorModule} from '../../shared/components/paginator/paginator.module';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([FeatureRendererComponent]),
    FeatureCardModule,
    MatInputModule,
    PaginatorModule,
    FormsModule
  ],
  declarations: [
    FeaturesComponent, FeatureRendererComponent
  ],
  providers: [FeatureService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturesModule {
}
