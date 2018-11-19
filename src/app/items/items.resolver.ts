import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemsService } from '../shared/services/items.service';
import { Item } from '../shared/models/item.model';


@Injectable()
export class ItemsResolver implements Resolve<Item[]> {

    constructor(private service: ItemsService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.service.getItem(Number(route.paramMap.get('index')));
    }
}
