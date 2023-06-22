import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DistanceModule } from './pages/distancia/distance.module';
import { ResistanceComponent } from './pages/resistance/resistance.component';

@NgModule({
  declarations: [
    AppComponent,
    ResistanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    DistanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
