import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private apiKey : string = 'EBmIptlnTTTtbk32MCvVPi3l0rapNZUh';
  private url : string = 'http://api.giphy.com/v1/gifs';
  private _historial : string[] = [];
  public resultados : any [] = [];

  get historial(){
    return [...this._historial];
  }

  //el constructor solo se ejecta 1 vez
 constructor(private http: HttpClient){

  if(localStorage.getItem('historial')){
    this._historial = JSON.parse(localStorage.getItem('historial')!);
    this.resultados = JSON.parse(localStorage.getItem('resultado')!);
  }

 }


  buscarGifs(query: string= ''){

    query = query.trim().toLowerCase();
    // solo mostrar los ultimos 10 historiales
    if  (!this._historial.includes(query)){
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10);

//    localStorage.setItem('historial', JSON.stringify(this._historial));


      }


    console.log(this._historial);

      const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '12')
        .set('q', query);

        //this.http.get(`${this.url}/search?api_key=${this.apiKey}&q=${query}&limit=12`)
    this.http.get(`${this.url}/search`, {params})
    .subscribe( (respuesta : any)=> {
      //console.log(respuesta.data);
      this.resultados = respuesta.data;

      localStorage.setItem('historial', JSON.stringify(this._historial));
      localStorage.setItem('resultado', JSON.stringify(this.resultados));

    });

    /*llamado a gifs luego de hacer ensayo en postman
    fetch('http://api.giphy.com/v1/gifs/search?api_key=EBmIptlnTTTtbk32MCvVPi3l0rapNZUh&q=amor&limit=5')
    .then (respuesta =>{
      respuesta.json().then(data => {console.log(data)})
    })*/

  }

}
