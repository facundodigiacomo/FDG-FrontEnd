import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE:  string = '';
  descripcionE: string = '';
  mesE: string = '';
  anoE: string = '';
  lugarE: string = '';
  

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.mesE, this.anoE, this.lugarE);
    this.sExperiencia.save(expe).subscribe(
      data=>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo");
        this.router.navigate(['']);
      }
    )
  }

}
