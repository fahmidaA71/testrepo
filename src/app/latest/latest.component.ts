import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: `./latest.component.html`,
  styles: [`
        h1 {
      font-weight: bold;
    }
  `
  ]
})
export class LatestComponent implements OnInit {

  posts = [
    { title: 'Post 1' },
    { title: 'Post 2' },
    { title: 'Post 3' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
