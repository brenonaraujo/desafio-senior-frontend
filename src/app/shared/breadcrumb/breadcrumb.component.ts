import { NavItems, NavHome } from './../navItems';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
  items = NavItems;
  home = NavHome;

  constructor() { }

  ngOnInit() {
  }

}
