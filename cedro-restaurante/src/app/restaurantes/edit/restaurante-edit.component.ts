import { Restaurante } from './../restaurante.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CedroService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-restaurante-edit',
  templateUrl: './edit.component.html'
})
export class RestauranteEditComponent implements OnInit {
  restauranteForm: FormGroup
  restaurante: Restaurante

  constructor(private service: CedroService<Restaurante>, private activatedRouter: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.service.getById("restaurante", this.activatedRouter.snapshot.params['id']).subscribe(restaurante => this.restaurante = restaurante);
    this.restauranteForm = this.formBuilder.group({
      id: [null], 
      nome: [null]
    })    
  }

  update(restaurante: Restaurante) {
    restaurante.id = this.restaurante.id;
    this.service.edit("restaurante", restaurante.id, restaurante).subscribe((restaurante: Restaurante) => {
      this.router.navigate(['/restaurante'])
    })
  }
}