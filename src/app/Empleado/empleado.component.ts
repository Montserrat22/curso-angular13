import { Component } from "@angular/core";
import { Empleado } from './empleado';
@Component({
      selector:'empleado',
      templateUrl:'./empleado.component.html'
     })
export class EmpleadoComponent{
      public titulo='Componentes empleados';
     // public nombre_componente = 'Componente de empleado';
     // public listado_empleados = 'Juanchito, Susana, Mengano, Fulana';

     // public nombre_componente = 'Componente de empleado';
      // public listado_empleados = 'Juanchito, Susana, Mengano, Fulana';
      public empleado: Empleado;
      public trabajadores:Array<Empleado>;
      public trabajador_externo:boolean;
      public color:string;
      public color_seleccionado:string;

      constructor(){
            
            this.empleado = new Empleado('Montse velasco', 45, 'cocinera',true);
            this.trabajadores = [
                  new Empleado('alan velasco', 28, 'repartidor',false),
                  new Empleado('sandra velasco', 48, 'encargada',true)
            ];
           this.trabajador_externo=true;
           this.color='green';
           this.color_seleccionado='#ccc';
      }
     ngOnInit(){
           
           console.log(this.empleado);
           console.log(this.trabajadores);
     }
     cambiarExterno(valor:any){ 
           //any es un tipo de dato que recibe cualquier valor (string number etc)
           this.trabajador_externo=valor;
     }
     logColorSeleccionado(){
           console.log(this.color_seleccionado);
     }
}