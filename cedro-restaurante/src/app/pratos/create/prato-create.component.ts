import { Restaurante } from './../../restaurantes/restaurante.model';
import { CedroService } from './../../app.service';
import { Prato } from './../prato.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prato-create',
  templateUrl: './create.component.html'
})
export class PratoCreateComponent implements OnInit {
  pratoForm: FormGroup
  prato: Prato
  restaurantes: Restaurante[]

  constructor(private service: CedroService<Prato>, private restauranteService: CedroService<Restaurante>, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pratoForm = this.formBuilder.group({
      restauranteId: [null],
      descricao: [null],
      valor: [null]
    })

    this.restauranteService.getAll("restaurante").subscribe(restaurantes => this.restaurantes = restaurantes)
  }

  save(prato: Prato) {
    this.service.add("prato", prato).subscribe((prato: Prato) => {
      this.router.navigate(['/prato'])
    })
  }
}