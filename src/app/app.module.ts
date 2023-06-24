import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DistanceModule } from './pages/distancia/distance.module';
import { ResistanceComponent } from './pages/resistance/resistance.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CinepolisComponent } from './pages/cinepolis/cinepolis.component';
import { CinepolisModule } from './pages/cinepolis/cinepolis.module';
import { ResistanceModule } from './pages/resistance/resistance.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    DistanceModule,
    NgbModule,
    ResistanceModule,
    CinepolisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
