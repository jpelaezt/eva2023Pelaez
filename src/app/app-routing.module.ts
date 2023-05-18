import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCarreraComponent } from './pages/list-carrera/list-carrera.component';
import { CarreraComponent } from './pages/carrera/carrera.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

const routes: Routes = [
    {path: "paginas/listacarreras", component: ListCarreraComponent},
    {path: "paginas/nueva-carrera", component: CarreraComponent},
    {path: "paginas/acerca-de", component: AcercaComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }