import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsLibraryComponent } from './components-library.component';



@NgModule({
  imports: [CommonModule],
  declarations: [ComponentsLibraryComponent],
  exports: [ComponentsLibraryComponent]
})
export class ComponentsLibraryModule { }
