import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatPaginatorModule} from '@angular/material';
import {PaginatorComponent, PaginatorService} from './index';

@NgModule({
    imports: [
        CommonModule,
        MatPaginatorModule
    ],
    declarations: [PaginatorComponent],
    exports: [PaginatorComponent],
    providers: [PaginatorService]
})
export class PaginatorModule {
}
