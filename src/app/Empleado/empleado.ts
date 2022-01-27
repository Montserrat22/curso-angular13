export class Empleado{
      /*
      public nombre:string;
      public edad:number;

      constructor(nombre, edad){
            this.nombre=nombre;
            this.edad=edad;
      }*/

      //para definir un modelo:
      constructor(
           
            public nombre:string,
            public edad:number,
            public cargo:string,
            public contratado:boolean
      ){  }
}