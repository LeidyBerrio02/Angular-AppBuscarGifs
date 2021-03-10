import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService : GifsServiceService, private http: HttpClient){
  }

  get historial(){
    return this.gifsService.historial;
  }
  buscar(termino : string){
console.log(termino);

this.gifsService.buscarGifs(termino);

  }

}
