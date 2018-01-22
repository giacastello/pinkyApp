import { Injectable } from '@angular/core';

@Injectable()
export class MathService {
  public sum: number;
  public res: number;

  constructor() { }

  public hacerCuenta(sum:number, res:number) : void  {
    console.log(sum, res);
  }
}
