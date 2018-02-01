import { Component, OnInit, Input, Renderer2, ViewChild } from '@angular/core';
import { MathService } from '../../service/math.service';
import { GraficosService } from '../../service/graficos.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Input ('size') size: number = 30; // @decorador ('variable') variable:tipo = datodefaultparacambiar.s
  @ViewChild('box') box;
  public posX:number=0;
  public posY:number=0;
  public gatito:boolean=false; 

  constructor(
  public cuenta : MathService,   
  public grafico : GraficosService,
  public renderer : Renderer2
 
  ) { }

  ngOnInit() {
    this.cuenta.hacerCuenta (8,8);
    this.renderer.listen('document','mousemove',()=>{
    })
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

}
