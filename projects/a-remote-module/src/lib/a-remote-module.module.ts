import { NgModule } from '@angular/core';
import { ARemoteModuleRoutingModule } from './a-remote-module-routing.module';
import { ARemoteModuleComponent } from './a-remote-module.component';

@NgModule({
  declarations: [ARemoteModuleComponent],
  imports: [
	ARemoteModuleRoutingModule
  ],
  exports: [ARemoteModuleComponent]
})
export class ARemoteModuleModule { }
