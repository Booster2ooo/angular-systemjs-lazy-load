import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-a-remote-module',
  template: `
    <p>
      a-remote-module works!
    </p>
  `,
  styles: [
  ]
})
export class ARemoteModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
