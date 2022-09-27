import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  //url= "http://localhost:8080/porfolio";
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any> { 
    return this.http.get('./assets/data/data.json');
    //console.log("El servicio esta corriendo");
  }

}
