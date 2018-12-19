import { Component, OnDestroy, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { PaginatorService } from './paginator.service';
import { Subscription } from 'rxjs';
import { Paginator } from './paginator';

@Component({
  selector: 'ff4j-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit, OnDestroy {
  pageSize: number;
  totalItems: number;
  gridApi: GridApi;
  subscription: Subscription;

  constructor(private paginatorService: PaginatorService) {
  }

  ngOnInit() {
    this.subscription = this.paginatorService.changes.subscribe((paginatorInfo: Paginator.PaginatorInfo) => {
      this.gridApi = paginatorInfo.gridApi;
      this.pageSize = paginatorInfo.pageSize;
      this.totalItems = paginatorInfo.totalItems;
    });
  }

  onPageChange(event) {
    this.gridApi.paginationGoToPage(event.pageIndex);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
