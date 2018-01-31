import { Directive, ElementRef, HostListener, Input } from '@angular/core'; /* ElementRef es una clase que obtiene un elemento del dom*/


@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {
  public nColor:string = '666';

  constructor( public el:ElementRef ) {} /* Declaramos la variable el, de manera publica para tener acceso a ella, y de tipo ElementRef*/

  ngOnInit () {  /* Se ejecuta una vez sola después de un constructor*/
    this.el.nativeElement.style.background='#' + this.nColor;
  }
  @HostListener('mousedown', ['$event'] ) mouseDown (event:MouseEvent) {
    this.el.nativeElement.style.background='#999';
  }
  @HostListener('mouseup', ['$event'] ) mouseUp (event:MouseEvent) {
    this.el.nativeElement.style.background='#777';
  }
  @Input ('appResaltar') set nuevoColor(color:string){
    this.nColor = color;

  }
  
}
