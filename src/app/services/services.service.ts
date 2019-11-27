import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(protected httpClient: HttpClient) { }

  listarEquipos() {
    return this.httpClient.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League');
  }

  bucarEquipo(equipoId:string){
    return this.httpClient.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${equipoId}`)
  }

  buscarJugadores(equipoId:string){
    return this.httpClient.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${equipoId}`)
  }

  buscarJugador(jugadorId:string){
    return this.httpClient.get(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${jugadorId}`)
  }

  posiciones(){
    return this.httpClient.get(`https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920`);
  }

  resultados(id){
    return this.httpClient.get(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${id}`)
  }

  eventos(id){
    return this.httpClient.get(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${id}`)
  }

  todosLosEventos(){
    return this.httpClient.get(`https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1920`)
  }


}
