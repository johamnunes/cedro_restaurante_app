import { CedroService } from './../app.service';
import { Restaurante } from './restaurante.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {
  restaurantes: Restaurante[]
  filter = {nome: ""}

  constructor(private service: CedroService<Restaurante>, private router: Router) { }

  ngOnInit() {
    this.service.getAll("restaurante").subscribe(restaurantes => this.restaurantes = restaurantes);    
  }

  delete(restaurante: Restaurante) {
    this.service.delete("restaurante", restaurante.id).subscribe((restaurante: Restaurante) => {
      this.service.getAll("restaurante").subscribe(restaurantes => this.restaurantes = restaurantes);
    })
  }

}
