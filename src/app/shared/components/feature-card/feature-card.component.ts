import {Component, Input, OnInit} from '@angular/core';
import {Feature} from '../../models/Feature';
import {Property} from '../../models/Property';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'ff4j-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: [ './feature-card.component.scss' ]
})
export class FeatureCardComponent implements OnInit {
  @Input() feature: Feature;

  constructor(private logger: NGXLogger) {
  }

  ngOnInit() {
    if (!this.feature || null == this.feature) {
      this.logger.error('feature property cannot be undefined');
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
}
