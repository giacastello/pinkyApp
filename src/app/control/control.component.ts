import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { MathService } from '../service/math.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Input ('size') size: number = 30; // @decorador ('variable') variable:tipo = datodefaultparacambiar.s

  constructor(
  public cuenta : MathService,   
  public renderer : Renderer2
 
  ) { }

  ngOnInit() {
    this.cuenta.hacerCuenta (8,8);
    this.renderer.listen('document','mousemove',()=>{
    })
    
  }

}
