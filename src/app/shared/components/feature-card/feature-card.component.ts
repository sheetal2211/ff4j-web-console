import {Component, Input, OnInit} from '@angular/core';
import {Feature} from '../../models/Feature';
import {Property} from '../../models/Property';
import {MatSlideToggleChange} from '@angular/material';
import {FeatureService} from '../../services/feature.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'ff4j-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {
  @Input() feature: Feature;

  constructor(private featureService: FeatureService, private logger: NGXLogger) {
  }

  ngOnInit() {
    if (!this.feature || null == this.feature) {
      throw new Error('feature property cannot be undefined');
    }
  }

  getPropertiesValues(customProperties: Map<string, Property>): string[] {
    const result = [];
    if (customProperties) {
      customProperties.forEach((value: Property) => {
        result.push(value.name + ' = ' + value.value);
      });
    }
    return result;
  }

  toggle(featureUid: string, event: MatSlideToggleChange) {
    this.featureService.toggle(featureUid, event.checked).subscribe(() => {
      // to show some status
      // refresh only the status of feature uid
    }, (error) => {
      this.logger.error(`Unable to toggle feature ${featureUid}`, error);
      // to show some status
    });
  }
}
