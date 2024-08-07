import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';



@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridComponent // Export it so it can be used in other modules
  ]
})
export class GridModule { }
