import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { GraficosService } from '../service/graficos.service';

@Component({
  selector: 'subpage', //con este selector, llamamos a nuestro componente en la app raíz.
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.css']
})
export class SubpageComponent implements OnInit {
  @Input ('size') size: number = 10; // @decorador ('variable') variable:tipo = datodefaultparacambiar.s
  constructor(
    public grafico : GraficosService, //aca llamo a todas las funciones de GraficoService
    public renderer : Renderer2
  ) { }

  ngOnChanges() { //esta funcion se va a ejecutar antes del ngOnInit siempre y cuando se cumplan las siguientes condiciones
  } 

  ngOnInit() {
    this.grafico.moverObjeto(10,10);
    //esta función llama al objeto renderer2. y a la función listen (objeto a escuchar, listener , funcion a ejecutar)
    this.renderer.listen('document','mousemove',()=>{
    });
    console.log(this.size); 
    
  }

  ngDoCheck () { // función que escucha cambios en el componente y ejecuta cuando los hay.
  console.log('movimiento');
  }

  ngAfterContentInit () { // se va a ejecutar una sola y unica vez cuando el contenido del template esté cargado.
  }
  ngAfterContentChecked () { // función que escucha cambios en el contenido  del template y ejecuta si los hay.
  }
  ngAfterViewInit () { // Se ejecuta una única vez cuando se terminan de cargar las views.
  }
  ngAfterViewChecked () { // Se ejecuta cada vez que hay cambios en los views (que son objetos del dom)
  }
  ngOnDestroy () { //Se ejecuta una única vez cuando se debe destruir un componente.

  }
}
