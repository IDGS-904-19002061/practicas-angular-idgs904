import { Component } from '@angular/core';

@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.component.html',
  styleUrls: ['./resistance.component.css']
})
export class ResistanceComponent {
  b1:string=''
  b2:string=''
  b3:string=''
  tole:string=''
  tolColor:string=''
  colors:string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray', 'white'] 
  values:number[] = [1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000] 
  val:number=0
  min:number=0
  max:number=0

  setB1(value:string){
    this.b1 = value
  }
  setB2(value:string){
    this.b2 = value
  }
  setB3(value:string){
    this.b3 = value
  }
  setTol(value:string){
    this.tole = value
    value == "0.05" ? this.tolColor="gold" : this.tolColor="gray"
  }

  calculate() {
    var tmp:string = (this.colors.indexOf(this.b1)).toString() + (this.colors.indexOf(this.b2)).toString()
    this.val = parseInt(tmp) * (this.values[this.colors.indexOf(this.b3)])
    this.min = this.val - (this.val*parseFloat(this.tole))
    this.max = this.val + (this.val*parseFloat(this.tole))
  }
}
