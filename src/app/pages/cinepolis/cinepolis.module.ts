import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinepolisComponent } from './cinepolis.component';



@NgModule({
  declarations: [
    CinepolisComponent,],
  imports: [
    CommonModule
  ],
  exports:[CinepolisComponent]
})
export class CinepolisModule { }
