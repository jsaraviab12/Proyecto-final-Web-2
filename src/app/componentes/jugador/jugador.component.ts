import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  jugador = []

  constructor(private service: ServicesService, private parametro: ActivatedRoute) { }

  ngOnInit() {
    this.buscarJugador(this.parametro.snapshot.params['id']);
  }

  buscarJugador(id){
    this.service.buscarJugador(id).subscribe((data)=>{
      console.log(data['players'])
      this.jugador = data['players'];
    });
  }
}
