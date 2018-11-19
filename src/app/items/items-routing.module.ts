import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './items-list/items-list.component';
import { ItemsCreateComponent } from './items-create/items-create.component';
import { ItemsEditComponent } from './items-edit/items-edit.component';
import { ItemsResolver } from './items.resolver';

const routes: Routes = [
  {
    path: 'items', children: [
      { path: 'list', component: ListComponent },
      { path: 'edit/:index', component: ItemsEditComponent, resolve: [ItemsResolver] },
      { path: 'create', component: ItemsCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
