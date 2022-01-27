import { Component } from "@angular/core";

@Component({
      selector:'fruta',
      templateUrl:'./fruta.component.html'
     })
export class FrutaComponent{
      public nombre_componente = 'Componente de fruta';
      public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

// Tipos de datos
public nombre:string;
public edad:number;
public mayorDeEdad:boolean;
public trabajos:Array<any>=['carpintero',44,'fornalero'];
comodin:any;

constructor(){
      this.nombre='montse';
      this.edad=23;
      this.mayorDeEdad=true;
      this.comodin='yes';
      
}
//este metodo se ejecuta antes del constructor
ngOnInit(){
      this.cambiarNombre();
      this.cambiarEdad(24);
      console.log(this.nombre + " " + this.edad);

      //variables de alcanze var -> global let -> dentro de un bloque
      var uno =8;
      var dos =15;
      if(uno === 8){
            let  uno =3;
            var dos = 88;
            console.log("dentro del if (bloque)" +uno+" "+dos);

      }
      console.log("fuera del if (bloque)" +uno+" "+dos);
            
}
cambiarNombre(){
      this.nombre='Mireya';

}
cambiarEdad(edad:any){
      this.edad = edad;
}
}