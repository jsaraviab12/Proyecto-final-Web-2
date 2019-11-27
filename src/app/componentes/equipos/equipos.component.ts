import { Component, OnInit } from '@angular/core';
import { ServicesService } from './../../services/services.service';


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  listaEquipos = [];
  idFavoritos:any = JSON.parse(localStorage.getItem("idFavoritos"));
  listaFavoritos:any = JSON.parse(localStorage.getItem("listaFavoritos"));
  

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.listarEquipos()
    console.log(this.listaFavoritos)
  }

  listarEquipos() {
    this.service.listarEquipos().subscribe((data) => {
      this.listaEquipos = data['teams'];
    });
  }

  favoritos(id) {
    if (this.idFavoritos==null) {
      this.idFavoritos=[]
    }else{
      this.idFavoritos = JSON.parse(localStorage.getItem("idFavoritos"));
    }
    let guardar = true;
    for (let i = 0; i < this.idFavoritos.length; i++) {
      if (id == this.idFavoritos[i]) {
        guardar = false;
      }
    }
    if (guardar) {
      this.idFavoritos.push(id)
      localStorage.setItem("idFavoritos",JSON.stringify(this.idFavoritos))
      this.agregarIdFavoritos(id)
    }else{
      alert("Este equipo ya esta en sus favoritos")
    }
  }

  agregarIdFavoritos(id): void {
    this.service.bucarEquipo(id).subscribe((data) => {
      if (this.listaFavoritos==null) {
        this.listaFavoritos=[]
      }else{
        this.listaFavoritos = JSON.parse(localStorage.getItem("listaFavoritos"));
      }
      this.listaFavoritos.push(data['teams'][0]);
      localStorage.setItem("listaFavoritos",JSON.stringify(this.listaFavoritos))
    });
    console.log(this.listaFavoritos)
  }
  
 
}
