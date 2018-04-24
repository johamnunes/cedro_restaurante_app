import { CedroService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesModule } from './restaurantes/restaurantes.module';
import { PratosModule } from './pratos/pratos.module';
import { HeaderModule } from './header/header.module';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HeaderModule,
    RestaurantesModule,
    PratosModule,
    routing
  ],
  providers: [
    CedroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
