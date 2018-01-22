import { Injectable } from '@angular/core';

@Injectable() // objeto que se va a inyectar en el componente.
export class GraficosService {
  public posX: number; // public hace que tenga acceso,
  public posY: number;

  constructor() {}

  public moverObjeto(x:number, y:number) : void {
    console.log(x,y);
  } 

}


