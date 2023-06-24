import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  card = ''
  buyers = ''
  tickets = ''
  name = ''
  res = ''
  price:number = 0

  setCard(value:string){
    this.card = value
    console.log(this.card);
  }
  setBuyers(value:string){
    this.buyers = value
  }
  setTickets(value:string){
    this.tickets = value
  }
  setName(value:string){
    this.name = value
  }

  calculate(){
    var tmp: number = parseInt(this.tickets)/parseInt(this.buyers)
    
    
    if( tmp> 7){
      this.res = "No se permite comprar mas de 7 boletos por persona"
    }else{
      this.price = 12*parseInt(this.tickets)
      if(parseInt(this.tickets)>5){
        this.price*=0.85
      }
      if(parseInt(this.tickets)<6 && parseInt(this.tickets)>2){
        this.price*=0.9
      }
      if(parseInt(this.card)==1){
        this.price*=0.9
      }
      this.res = this.price.toString()
    }
  }
}
