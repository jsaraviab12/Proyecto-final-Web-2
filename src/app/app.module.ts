import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServicesService } from './services/services.service';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { JugadorComponent } from './componentes/jugador/jugador.component'

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    EquipoComponent,
    JugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
