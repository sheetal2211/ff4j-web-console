import {Component, Input} from '@angular/core';

@Component({
  selector: 'ff4j-badges',
  templateUrl: './badges.component.html',
  styleUrls: [ './badges.component.scss' ]
})
export class BadgesComponent {

  @Input()
  values: string[];

  @Input()
  maxToShow = 2;

  showAll = false;

  constructor() {
  }
}
