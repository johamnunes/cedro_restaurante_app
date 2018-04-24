import { PratoFilterPipe } from './../pipes/prato-filter.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PratoCreateComponent } from './create/prato-create.component';
import { PratoEditComponent } from './edit/prato-edit.component';
import { PratosComponent } from './pratos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PratoCreateComponent,
    PratoEditComponent,
    PratosComponent,
    PratoFilterPipe
  ]
})
export class PratosModule { }
