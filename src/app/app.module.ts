// Este es el módulo principal de la aplicación.

// imports para crear el módulo principal
import { BrowserModule } from '@angular/platform-browser'; //módulo para el navegador
import { NgModule } from '@angular/core'; // traemos el objeto del core.

//imports que necesita mi aplicación
import { AppComponent } from './app.component';
import { SubpageComponent } from './subpage/subpage.component'; 
import { GraficosService } from './service/graficos.service';
import { ControlComponent } from './control/control.component';
import { MathService } from './service/math.service';
import { ResaltarDirective } from './resaltar.directive';


@NgModule({ // objeto del core.
  declarations: [ // declaraciones, componentes, directivas, pipes se llaman aquí. Angular CLI automáticamente las suma acá desde comandos de la terminal.
    AppComponent, SubpageComponent, ControlComponent, ResaltarDirective
  ],
  imports: [ // Los imports que necesita el módulo app
    BrowserModule
  ],
  providers: [
    GraficosService,
    MathService
  ],// los servicios que creamos para resolver en diferentes partes de nuestra app, que serán llamados solo cuando sean necesarios. El import se va a hacer automáticamente, pero acá hay que escribirlos. 
  bootstrap: [AppComponent] // Componente raíz del módulo que viene de app.component.ts
})
export class AppModule { }
