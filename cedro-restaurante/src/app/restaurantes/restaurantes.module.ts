import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantesComponent } from './restaurantes.component';
import { RestauranteCreateComponent } from './create/restaurante-create.component';
import { RestauranteEditComponent } from './edit/restaurante-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestauranteFilterPipe } from '../pipes/restaurante-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RestaurantesComponent,
    RestauranteCreateComponent,
    RestauranteEditComponent,
    RestauranteFilterPipe
    ],
  exports : [
    RestauranteCreateComponent,
    RestauranteEditComponent
  ]
})
export class RestaurantesModule { }
