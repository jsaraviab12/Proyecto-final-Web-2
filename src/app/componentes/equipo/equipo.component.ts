import { Component, OnInit } from '@angular/core';
import { ServicesService } from './../../services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  equipo = [];
  listajugadores = [];
  tPosiciones = [];
  resultados = [];
  eventos = [];
  todosLosEventos = [];

  id = this.parametro.snapshot.params['id']

  constructor(private service: ServicesService, private parametro: ActivatedRoute) { }

  ngOnInit() {
    this.bucarEquipo(this.id);
    this.bucarJugadores(this.id);
    this.getEventos(this.id)
    this.getTodosEventos()
    this.getRultados(this.id)
    this.posiciones();
  }

  bucarEquipo(id) {
    this.service.bucarEquipo(id).subscribe((data) => {
      this.equipo = data['teams'];
    });
  }

  bucarJugadores(id) {
    this.service.buscarJugadores(id).subscribe((data) => {
      this.listajugadores = data['player'];
    });
  }

  getRultados(id: string) {
    this.service.resultados(id).subscribe((data) => {
      this.resultados = data['results'];
    });
  }

  getEventos(id: string) {
    this.service.eventos(id).subscribe((data) => {
      console.log("eventos proximos:", data["events"]);
      this.eventos = data['events'];
    });
  }

  getTodosEventos() {
    this.service.todosLosEventos().subscribe((data) => {
      this.todosLosEventos = data['events'];
    });
  }


  posiciones() {
    this.service.posiciones().subscribe((data) => {
      console.log("poo", data['table'])
      this.tPosiciones = data['table'];
    });
  }


}
