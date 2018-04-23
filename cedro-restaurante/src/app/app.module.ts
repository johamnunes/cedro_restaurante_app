import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesModule } from './restaurantes/restaurantes.module';
import { PratosModule } from './pratos/pratos.module';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    RestaurantesModule,
    PratosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
