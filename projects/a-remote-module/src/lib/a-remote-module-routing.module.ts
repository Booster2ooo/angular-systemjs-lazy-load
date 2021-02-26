import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ARemoteModuleComponent } from './a-remote-module.component';


const routes: Routes = [
  {
    path: '',
    component: ARemoteModuleComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ARemoteModuleRoutingModule { }
