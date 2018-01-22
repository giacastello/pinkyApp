import { Component, OnInit } from '@angular/core';
import { MathService } from '../service/math.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(
  public cuenta : MathService,    
  ) { }

  ngOnInit() {
    this.cuenta.hacerCuenta (8,8);
  }

}
