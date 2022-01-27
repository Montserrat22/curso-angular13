import { Component } from "@angular/core";
import { Coche } from './coche';
import { PeticionesService } from "../services/peticiones.service";



@Component({
      selector:'coches',
      templateUrl:'./coches.component.html',
      providers:[PeticionesService]
})

export class CochesComponent{
public coche:Coche;
public coches:Coche[];

constructor(
      private _perticionesService:PeticionesService
){
      this.coche =new Coche("","","");
      this.coches=[
            new Coche("seat panda", "120", "blanco"),
            new Coche("renault clio", "110", "azul"),

      ];
}

ngOnInit(){
     this._perticionesService.getArticulos().subscribe(
           result =>{
console.log(result),
     },
     error =>{
           var errorMessage =<any>error;
           console.log(errorMessage);
     })
}
onSumit(){
     this.coches.push(this.coche);
     this.coche =new Coche("","","");
}
}