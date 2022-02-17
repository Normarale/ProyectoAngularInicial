import { Component, OnInit } from '@angular/core';

import { CargarSkilService } from 'src/app/servicios/cargar-skil.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  constructor(private _cargaSkill:CargarSkilService) {
    _cargaSkill.carga(["/skil"]);
   }

  ngOnInit(): void {

   }

}
