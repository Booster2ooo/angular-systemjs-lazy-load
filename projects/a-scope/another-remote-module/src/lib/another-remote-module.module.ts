import { NgModule } from '@angular/core';
import { AnotherRemoteModuleRoutingModule } from './another-remote-module-routing.module';
import { AnotherRemoteModuleComponent } from './another-remote-module.component';



@NgModule({
  declarations: [AnotherRemoteModuleComponent],
  imports: [
	AnotherRemoteModuleRoutingModule
  ],
  exports: [AnotherRemoteModuleComponent]
})
export class AnotherRemoteModuleModule { }
