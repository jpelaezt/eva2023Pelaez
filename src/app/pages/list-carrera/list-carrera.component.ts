import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Carrera } from 'src/app/domain/carrera';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-list-carrera',
  templateUrl: './list-carrera.component.html',
  styleUrls: ['./list-carrera.component.css']
})
export class ListCarreraComponent {
  listadoCarreras: Carrera[] = []

  constructor(private carreraService: CarreraService,
      private router: Router) {
    this.listadoCarreras = carreraService.getList()
    console.log('listadoCarreras', this.listadoCarreras)
  }

  
}
