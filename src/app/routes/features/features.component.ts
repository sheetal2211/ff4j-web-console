import { Component, OnInit } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridOptions, RowNode } from 'ag-grid-community';

import { FeatureService } from '../../shared/services/feature.service';
import { Feature } from '../../shared/models/Feature';
import { NGXLogger } from 'ngx-logger';
import MapUtils from '../../shared/utils/map.utils';
import { FeatureRendererComponent } from './feature-renderer.component';
import { PaginatorService } from '../../shared/components/paginator';

@Component({
  selector: 'ff4j-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  features: Feature[];
  filter: string;
  gridApi: GridApi;
  columnApi: ColumnApi;
  gridOptions: GridOptions;

  getQuickFilter = params => params.value;

  constructor(private featureService: FeatureService, private logger: NGXLogger, private paginatorService: PaginatorService) {
    const colDefs: ColDef[] = [
      {
        field: 'uid',
        getQuickFilterText: this.getQuickFilter
      },
      {
        field: 'description',
        getQuickFilterText: this.getQuickFilter
      },
      {
        field: 'group',
        getQuickFilterText: this.getQuickFilter
      },
      {
        field: 'permissions',
        getQuickFilterText: this.getQuickFilter
      }
    ];
    this.gridOptions = {
      headerHeight: 0,
      columnDefs: colDefs,
      rowHeight: 160,
      suppressHorizontalScroll: true,
      enableFilter: true,
      fullWidthCellRenderer: 'fullWidthCellRenderer',
      frameworkComponents: {
        fullWidthCellRenderer: FeatureRendererComponent
      },
      suppressPaginationPanel: true,
      isFullWidthCell: (rowNode: RowNode) => true,
      onGridReady: params => {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
      },
      pagination: true,
      paginationAutoPageSize: true,
      onPaginationChanged: params => {
        this.gridApi = params.api;
        this.notifyPaginationService();
      }
    };
  }

  notifyPaginationService() {
    this.paginatorService.setPaginationInfo({
      pageSize: this.gridApi.paginationGetPageSize(),
      totalItems: this.gridApi.paginationGetRowCount(),
      gridApi: this.gridApi
    });
  }

  ngOnInit() {
    this.featureService.getFeatures().subscribe(
      response => {
        this.features = response;
        this.initProperties();
        this.logger.debug('Features : ' + JSON.stringify(this.features));
      },
      error => {
        this.logger.error('Unable to fetch features', error);
      }
    );
  }

  private initProperties() {
    this.features.forEach(feature => {
      if (feature.customProperties && !(feature.customProperties instanceof Map)) {
        feature.customProperties = MapUtils.objectToMap(feature.customProperties);
      }
    });
  }

  onFilterTextBoxChanged() {
    this.gridOptions.api.setQuickFilter(this.filter);
  }
}
