import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './template/cabecera/cabecera.component';
import { CarreraComponent } from './pages/carrera/carrera.component';
import { ListCarreraComponent } from './pages/list-carrera/list-carrera.component';
import { FormsModule } from '@angular/forms';
import { AcercaComponent } from './pages/acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CarreraComponent,
    ListCarreraComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
