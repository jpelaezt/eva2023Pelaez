import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  constructor(private router: Router){
  }

  listar() {
    this.router.navigate(['paginas/listacarreras'])
  }

  nuevo() {
    this.router.navigate(['paginas/nueva-carrera'])
  }

  acerca() {
    this.router.navigate(['paginas/acerca-de'])
  }
}
