import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ //decorador
  name: 'filtro' // nombre
})
export class FiltroPipe implements PipeTransform { 

  transform(value: any, args?: any): any { // se va a ejecutar una sola vez como el constructor.
    value= value.replace('a','x');
    return value; // SIEMPRE tiene un return
  }

}
