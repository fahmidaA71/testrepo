import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]

})
export class NavbarComponent implements OnInit {

  navs = [
    { name: 'home', route: '/home'},
    { name: 'about', route: '/about' },
    { name: 'contact', route: '/contact' },
    { name: 'latest', route: '/latest' },
   ];

  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
