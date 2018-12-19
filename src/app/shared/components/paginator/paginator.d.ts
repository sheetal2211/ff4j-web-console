import { GridApi } from 'ag-grid-community';

declare namespace Paginator {
  export interface PaginatorInfo {
    pageSize: number;
    totalItems: number;
    gridApi: GridApi;
  }
}
