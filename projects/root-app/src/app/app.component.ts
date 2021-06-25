import { 
  Component, 
  Injector,
  ɵrenderComponent as renderComponent
} from '@angular/core';
import { ComponentsLibraryComponent } from 'components-library';

const System = (window as any).System;

@Component({
  selector: 'app-root',
  template: `
  <a routerLink="/remote">Load remote</a> | <a routerLink="/scoped-remote">Load remote scoped</a> | <button (click)="loadRemoteComponent()">Load remote component</button>
  <router-outlet></router-outlet><br>
  <lib-component-host>I should host a remote component when triggered</lib-component-host>
  `,
  styles: []
})
export class AppComponent {
  constructor(private injector: Injector) {}
  loadRemoteComponent() {
    System.import('components-library').then((m: any) => {
      const cmp = renderComponent<ComponentsLibraryComponent>(m['ComponentsLibraryComponent'], { host: 'lib-component-host', injector: this.injector });
      cmp.greeted.subscribe((c) => console.log(c));
      setTimeout(() => {
        cmp.name = "visitor";
      }, 2000);
    })
  }
}
