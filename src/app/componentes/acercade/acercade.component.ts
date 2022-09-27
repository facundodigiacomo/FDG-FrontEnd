import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  persona: persona =new persona("","");

  constructor(public porfolioService: PorfolioService) { }

  ngOnInit(): void {
  }

}
