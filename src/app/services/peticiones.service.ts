import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";


@Injectable()

export class PeticionesService{
      public url:string;
      
      constructor(
            private _http: HttpClient,
           
            
            ){
            this.url="https://jsonplaceholder.typicode.com/posts";
      }
      getPrueba(){
            return'hola mundo desde el servicio';
      }
      getArticulos(){
            
            return this._http.get(this.url).pipe(map(res => res ));

      }


      
     

}

    