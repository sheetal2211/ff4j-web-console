import {Component, OnInit} from '@angular/core';
import {FeatureService} from '../../shared/services/feature.service';
import {Feature} from '../../shared/models/Feature';
import {NGXLogger} from 'ngx-logger';
import MapUtils from '../../shared/utils/map.utils';

@Component({
  selector: 'ff4j-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features: Feature[];

  constructor(private featureService: FeatureService, private logger: NGXLogger) {
  }

  ngOnInit() {
    this.featureService.getFeatures().subscribe((response) => {
      this.features = response;
      this.initProperties();
      this.logger.debug('Features : ' + JSON.stringify(this.features));
    }, (error) => {
      this.logger.error('Unable to fetch features', error);
    });
  }

  private initProperties() {
    this.features.forEach((feature) => {
      if (feature.customProperties && !(feature.customProperties instanceof Map)) {
        feature.customProperties = MapUtils.objectToMap(feature.customProperties);
      }
    });
  }
}
