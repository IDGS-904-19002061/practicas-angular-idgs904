import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { DistanciaComponent } from './distancia.component';


@NgModule({
  declarations: [DistanciaComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    NgIf,
    FormsModule,
    MatRadioModule,
  ],
  exports:[DistanciaComponent]
})
export class DistanceModule { }
