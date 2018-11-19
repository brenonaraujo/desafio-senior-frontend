import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  sidebarVisible: boolean;
  icon: string;

  constructor() { }

  ngOnInit() {
    this.sidebarVisible = false;
    this.icon = 'pi-bars';
  }

  showSideBar() {
    const sideNav = document.getElementsByClassName('sideNav')[0];
    const toogleIcon = document.getElementsByClassName(this.icon)[0];
    if (this.sidebarVisible === false) {
      sideNav.classList.add('nav-open');
      toogleIcon.classList.replace('pi-bars', 'pi-times');
      this.icon = 'pi-times';
      this.sidebarVisible = true;
    } else {
      this.sidebarVisible = false;
      sideNav.classList.remove('nav-open');
      toogleIcon.classList.replace('pi-times', 'pi-bars');
      this.icon = 'pi-bars';
    }
  }

}
