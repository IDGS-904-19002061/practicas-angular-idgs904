import { Component } from '@angular/core';

@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.component.html',
  styleUrls: ['./resistance.component.css']
})
export class ResistanceComponent {
  b1=''
  b2=''
  b3=''
  tol=''
  band1:string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray', 'white'] 
  values:number[] = [1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000] 
  val:number=0
  min:number=0
  max:number=0

  calculate() {
    this.val = parseInt(this.b1+this.b2) * (this.values[this.band1.indexOf(this.b3)+1])
    this.min = this.val - (this.val*parseFloat(this.tol))
    this.max = this.val + (this.val*parseFloat(this.tol))
  }
}
