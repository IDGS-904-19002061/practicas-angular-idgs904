import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  x1=''
  x2=''
  y1=''
  y2=''
  res:number=0

  calculate() {
    this.res = Math.sqrt(Math.pow((parseInt(this.x2)-parseInt(this.x1)),2) + Math.pow((parseInt(this.y2)-parseInt(this.y1)), 2))
  }
}
