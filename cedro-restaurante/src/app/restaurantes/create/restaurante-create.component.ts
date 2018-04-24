import { CedroService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'
import { Router, ActivatedRoute} from '@angular/router'
import { Restaurante } from '../restaurante.model';

@Component({
  selector: 'app-restaurante-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class RestauranteCreateComponent implements OnInit {
  restauranteForm: FormGroup
  restaurante: Restaurante

  constructor(private service: CedroService<Restaurante>, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.restauranteForm = this.formBuilder.group({nome: [null]})
  }

  save(restaurante: Restaurante) {
    console.log(restaurante);
    this.service.add("restaurante", restaurante).subscribe((restaurante: Restaurante) => {
      this.router.navigate(['/restaurante'])
    })
  }

}