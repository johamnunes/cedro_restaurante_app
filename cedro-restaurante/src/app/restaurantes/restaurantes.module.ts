import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantesComponent } from './restaurantes.component';
import { RestauranteCreateComponent } from './create/restaurante-create.component';
import { RestauranteEditComponent } from './edit/restaurante-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RestaurantesComponent,
    RestauranteCreateComponent,
    RestauranteEditComponent
    ],
  exports : [
    RestauranteCreateComponent,
    RestauranteEditComponent
  ]
})
export class RestaurantesModule { }
