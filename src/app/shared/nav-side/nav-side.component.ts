import { Component, OnInit } from '@angular/core';
import { NavItems } from '../navItems';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html'
})
export class NavSideComponent implements OnInit {
  items = NavItems;

  constructor() { }

  ngOnInit() {
  }

}
