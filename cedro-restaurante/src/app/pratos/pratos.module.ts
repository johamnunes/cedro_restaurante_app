import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PratoCreateComponent } from './create/prato-create.component';
import { PratoEditComponent } from './edit/prato-edit.component';
import { PratosComponent } from './pratos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PratoCreateComponent,
    PratoEditComponent,
    PratosComponent
  ]
})
export class PratosModule { }
