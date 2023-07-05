import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
  name = ''
  address = ''
  tel = ''
  size = ''
  quantity = ''
  res = ''
  price:number = 0

  setAddress(value:string){
    this.address = value
    console.log(this.address);
  }
  setTel(value:string){
    this.tel = value
  }
  setSize(value:string){
    this.size = value
  }
  setName(value:string){
    this.name = value
  }
  setQuantity(value:string){
    this.quantity = value
  }

  calculate(){

  }
}
