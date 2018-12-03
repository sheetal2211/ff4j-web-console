import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

import {Paginator} from './index';

@Injectable()
export class PaginatorService {

    paginationReady: BehaviorSubject<Paginator.PaginatorInfo> = new BehaviorSubject({
        pageSize: 0,
        totalItems: 0,
        gridApi: undefined
    });
    changes = this.paginationReady.asObservable().pipe(distinctUntilChanged());

    constructor() {
    }
    setPaginationInfo(paginatorInfo) {
        this.paginationReady.next(paginatorInfo);
    }
}
