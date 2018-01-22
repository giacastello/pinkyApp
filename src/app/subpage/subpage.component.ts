import { Component, OnInit } from '@angular/core';
import { GraficosService } from '../service/graficos.service';

@Component({
  selector: 'subpage', //con este selector, llamamos a nuestro componente en la app raíz.
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.css']
})
export class SubpageComponent implements OnInit {

  constructor(
    public grafico : GraficosService, //aca llamo a todas las funciones de GraficoService
  ) { }

  ngOnInit() {
    this.grafico.moverObjeto(10,10);
  }

}
