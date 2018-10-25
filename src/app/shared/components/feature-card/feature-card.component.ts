import {Component, Input, OnInit} from '@angular/core';
import {Feature} from '../../models/Feature';

@Component({
  selector: 'ff4j-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: [ './feature-card.component.scss' ]
})
export class FeatureCardComponent implements OnInit {
  @Input() feature: Feature;

  constructor() {
  }

  ngOnInit() {
  }
}
