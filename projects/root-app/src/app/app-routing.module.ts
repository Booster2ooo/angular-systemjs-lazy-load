import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as angularCore from '@angular/core';
import * as angularCommon from '@angular/common';
import * as angularRouter from '@angular/router';

(window as any).ng = {
 core: angularCore,
 common: angularCommon,
 router: angularRouter
};

var module = 'a-remote-module';

const modules = [
	{ path: 'remote', moduleId: 'a-remote-module', moduleClass: 'ARemoteModuleModule'},
	{ path: 'scoped-remote', moduleId: '@a-scope/another-remote-module', moduleClass: 'AnotherRemoteModuleModule'},
];

const appRoutes: Routes = [
  ...modules.map((module) => ({
	  path: module.path,
	  loadChildren: () => {
		return (window as any).System.import(module.moduleId).then((m: any) => {
		  if (module.moduleId.indexOf('@') === 0) {
			  return m[module.moduleId.split('/')[1]][module.moduleClass];
		  }
		  return m[module.moduleClass];
		});
	  }
  })),
  { 
    path: '', 
    redirectTo: '', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      //,{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
