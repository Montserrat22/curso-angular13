import { Component } from "@angular/core";
import { RopaService } from "../services/ropa.service";

@Component({
      selector:'home',
      templateUrl:'./home.component.html',
      providers:[RopaService]
})
export class HomeComponent{
      public titulo="Pagina Principal";
      public listado_ropa:string[]=[];
      public prenda_guardar:any;
      public fecha;
      public nombre='Montserrat MIREYA VelHer'

constructor(
      private _ropaService:RopaService
){
      this.fecha=new Date(1998,9,4);
}
ngOnInit(){
      this.listado_ropa=this._ropaService.getRopa();
      console.log(this.listado_ropa);
   // console.log(this._ropaService.prueba('camiseta Nike'));  
}
guardar_prenda(){
      this._ropaService.addRopa(this.prenda_guardar);
      this.prenda_guardar=null; //borra del input
}
eliminarPrenda(index:number){
      this._ropaService.deleteRopa(index);

}
}