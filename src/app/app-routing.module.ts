import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolisComponent } from './pages/cinepolis/cinepolis.component';
import { DistanciaComponent } from './pages/distancia/distancia.component';
import { ResistanceComponent } from './pages/resistance/resistance.component';
import { PizzaComponent } from './pages/pizza/pizza.component';

const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'Cinepolis', component: CinepolisComponent},
  {path: 'Distancia', component: DistanciaComponent},
  {path: 'Resistencia', component: ResistanceComponent},
  {path: 'Pizza', component: PizzaComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
