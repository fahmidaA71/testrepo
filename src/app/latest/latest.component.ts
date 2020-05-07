import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h1>inline templates work too</h1>
  `,
  styles: [`
        h1 {
      font-weight: bold;
    }
  `
  ]
})
export class LatestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
