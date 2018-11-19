import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {BreadcrumbModule} from 'primeng/breadcrumb';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavSideComponent } from './nav-side/nav-side.component';


@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    BreadcrumbModule
  ],
  declarations: [NavSideComponent, BreadcrumbComponent, NavBarComponent, NavBarComponent],
  exports: [NavSideComponent, BreadcrumbComponent, NavBarComponent]
})
export class SharedModule { }
