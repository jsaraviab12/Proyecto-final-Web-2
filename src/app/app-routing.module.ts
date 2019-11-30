import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { JugadorComponent } from './componentes/jugador/jugador.component';

const routes: Routes = [
  { path: 'lista-equipos', component: EquiposComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'jugador-detalle/:id', component: JugadorComponent },
  { path: '', redirectTo: '/lista-equipos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
