import { CedroService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { Prato } from './prato.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {
  pratos: Prato[];
  filter = {descricao: "" };

  constructor(private service: CedroService<Prato>, private router: Router) { }

  ngOnInit() {
    this.service.getAll("prato").subscribe(pratos => {
      this.pratos = pratos
      console.log(pratos);
    }
    );    
  }

  delete(prato: Prato) {
    this.service.delete("prato", prato.id).subscribe((prato: Prato) => {
      this.service.getAll("prato").subscribe(pratos => this.pratos = pratos);
    })
  }

}
