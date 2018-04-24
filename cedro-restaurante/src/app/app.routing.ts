import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteEditComponent } from './restaurantes/edit/restaurante-edit.component';
import { RestauranteCreateComponent } from './restaurantes/create/restaurante-create.component';
import { PratosComponent } from './pratos/pratos.component';
import { PratoEditComponent } from './pratos/edit/prato-edit.component';
import { PratoCreateComponent } from './pratos/create/prato-create.component';
import { ModuleWithProviders } from "@angular/compiler/src/core";

const APP_ROUTES : Routes = [
    { path: "", component: HomeComponent },
    { path: "restaurante", component: RestaurantesComponent },
    { path: "restaurante/create", component: RestauranteCreateComponent },
    { path: "restaurante/edit/:id", component: RestauranteEditComponent },
    { path: "prato", component: PratosComponent },
    { path: "prato/create", component: PratoCreateComponent },
    { path: "prato/edit/:id", component: PratoEditComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);