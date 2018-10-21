import {Component, OnInit} from '@angular/core';
import {Feature} from '../../models/Feature';
import {Property} from '../../models/Property';

@Component({
  selector: 'ff4j-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: [ './feature-card.component.scss' ]
})
export class FeatureCardComponent implements OnInit {
  feature: Feature;

  constructor() {
  }

  ngOnInit() {
    const properties = new Map<string, Property>();
    properties.set('Sample Property', {
      'name': 'SampleProperty',
      'description': '',
      'type': 'org.ff4j.property.PropertyString',
      'value': 'go!',
      'fixedValues': []
    });

    const initParams = new Map<string, string>();
    initParams.set('expression', 'f1 & f2 | !f1 | f2');

    this.feature = {
      uid: 'Feature_UID',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.`,
      group: 'Group Name',
      enable: false,
      permissions: [ 'ROLE_ADMIN', 'ROLE_USER', 'ROLE_ADMIN', 'ROLE_USER' ],
      customProperties: properties,
      flippingStrategy: {
        type: 'org.ff4j.strategy.el.ExpressionFlipStrategy',
        initParams: initParams
      }
    };
  }
}
