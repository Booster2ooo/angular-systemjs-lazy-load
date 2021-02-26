import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotherRemoteModuleComponent } from './another-remote-module.component';


const routes: Routes = [
  {
    path: '',
    component: AnotherRemoteModuleComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnotherRemoteModuleRoutingModule { }
