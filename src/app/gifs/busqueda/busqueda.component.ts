import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  constructor( private gifsSerive : GifsServiceService){

  }

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  buscar(){
    const valor= this.txtBuscar.nativeElement.value;

    this.gifsSerive.buscarGifs(valor);
    this.txtBuscar.nativeElement.value= '';
  }
}
