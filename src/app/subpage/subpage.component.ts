import { Component, OnInit, Input, Renderer2,ViewChild } from '@angular/core';
import { GraficosService } from '../service/graficos.service';

@Component({
  selector: 'subpage', //con este selector, llamamos a nuestro componente en la app raíz.
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.css']
})
export class SubpageComponent implements OnInit {
  @Input ('size') size: number = 10; // @decorador ('variable') variable:tipo = datodefaultparacambiar.s
  @ViewChild('box') box;
  public posX:number=0;
  public posY:number=0;
  public gatito:boolean=false; 

  constructor(
    public grafico : GraficosService, //aca llamo a todas las funciones de GraficoService
    public renderer : Renderer2
  ) { }

  ngOnChanges() { //esta funcion se va a ejecutar antes del ngOnInit siempre y cuando se cumplan las siguientes condiciones
  } 

  ngOnInit() { /* Se ejecuta una vez sola después de un constructor*/
    let this_=this;
    this.grafico.moverObjeto(10,10);
    //esta función llama al objeto renderer2. y a la función listen (objeto a escuchar, listener , funcion a ejecutar)
    this.renderer.listen('document','keydown',(e)=>{
      if (e.key == 'ArrowDown') {
        this.posY = (this.posY + 10);
        this.box.nativeElement.style.top = this.posY+'px';
        console.log(this.posY)
      }
      if (e.key == 'ArrowUp') {
        this.posY = (this.posY - 10);
        this.box.nativeElement.style.top = this.posY+'px';
        console.log(this.posY)
      }
      if (e.key == 'ArrowRight') {
        this.posX = (this.posX + 10);
        this.box.nativeElement.style.left = this.posX+'px';
        console.log(this.posX)
      }
      if (e.key == 'ArrowLeft') {
        this.posX = (this.posX - 10);
        this.box.nativeElement.style.left = this.posX+'px';
        console.log(this.posX)
      }
      // e consigue los datos del evento ejecutado
      //this.box.nativeElement.style.top = '100px'; // a box (que es un viewChild, y tenemos acceso total), le movemos el top 100px, TIENE QUE SER UN STRING.
      console.log(e); // va a imprimir el objeto del evento. Ene ste caso datos de la tecla.
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
