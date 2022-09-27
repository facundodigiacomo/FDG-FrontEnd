import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  edu: Educacion[] = [];
  

  constructor(private sExperiencia: SExperienciaService, private sEducacion: EducacionService , private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data => { this.edu = data; })
  }

  deleteExp(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

  deleteEdu(id?: number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo borrar la educacion");
        }
      )
    }
  }

}







//SIN DATABASE
//export class ExperienciaComponent implements OnInit {
  // experienceList:any;
  // educacionList:any;
  

//  constructor(private datosPorfolio:PorfolioService) { }

 // ngOnInit(): void {

    // this.datosPorfolio.obtenerDatos().subscribe(data => {
    //   this.experienceList=data.experiencia;
    //   this.educacionList=data.education;
    // });
 // }

//}



