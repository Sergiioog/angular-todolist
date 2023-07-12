import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TituloPrincipalComponent } from './titulo-principal/titulo-principal.component';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones.component';

import { TareaPrincipalComponent } from './tarea-principal/tarea-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    TituloPrincipalComponent,
    MenuOpcionesComponent,
    TareaPrincipalComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
