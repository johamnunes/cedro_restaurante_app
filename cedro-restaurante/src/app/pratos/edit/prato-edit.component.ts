import { Restaurante } from './../../restaurantes/restaurante.model';
import { CedroService } from './../../app.service';
import { Prato } from './../prato.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prato-edit',
  templateUrl: './edit.component.html'
})
export class PratoEditComponent implements OnInit {
  pratoForm: FormGroup
  prato: Prato
  restaurantes: Restaurante[]

  constructor(private service: CedroService<Prato>, private restauranteService: CedroService<Restaurante>, private activatedRouter: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.service.getById("prato", this.activatedRouter.snapshot.params['id']).subscribe(prato => this.prato = prato);
    this.pratoForm = this.formBuilder.group({
      restauranteId: [null],
      descricao: [null],
      valor: [null]
    })

    this.restauranteService.getAll("restaurante").subscribe(restaurantes => this.restaurantes = restaurantes)
  }

  update(prato: Prato){
    prato.id = this.prato.id;
    this.service.edit("prato", prato.id, prato).subscribe((prato: Prato) => {
      this.router.navigate(['/prato'])
    })
  }

}