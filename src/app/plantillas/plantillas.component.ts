import { Component } from "@angular/core";

@Component({
      selector:'plantillas',
      templateUrl:'./plantillas.component.html'
})
export class PlntillasComponent{
      public titulo;
      public administrador;

      constructor(){
         this.titulo = "platillas template en Angular";
         this.administrador = false;

      }

      cambiar(value:boolean){
            this.administrador=value;
      }
}