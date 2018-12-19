import { Component } from '@angular/core';
import { ICellRenderer, ICellRendererParams } from 'ag-grid-community';

import { Feature } from '../../shared/models/Feature';

@Component({
  selector: 'ff4j-feature-renderer',
  template: `
    <div class="container-fluid"><ff4j-feature-card [feature]="feature"> </ff4j-feature-card></div>
  `
})
export class FeatureRendererComponent implements ICellRenderer {
  feature: Feature;

  agInit(params: ICellRendererParams): void {
    this.feature = params.data;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
