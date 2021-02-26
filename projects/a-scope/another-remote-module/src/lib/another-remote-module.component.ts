import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-another-remote-module',
  template: `
    <p>
      @a-scope/another-remote-module works!
    </p>
  `,
  styles: [
  ]
})
export class AnotherRemoteModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
