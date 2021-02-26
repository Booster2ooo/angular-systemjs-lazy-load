import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLink="/remote">Load remote</a> | <a routerLink="/scoped-remote">Load remote scoped</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
