import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse/browse.component';



@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BrowseComponent // Export it so it can be used in other modules
  ]
})
export class BrowseModule { }
