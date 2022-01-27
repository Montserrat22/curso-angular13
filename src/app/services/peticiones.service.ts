import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";


@Injectable()
export class PeticionesService{
      public url:string;
      constructor(
            private _http:Http=<any>
            ){
            this.url="https://jsonplaceholder.typicode.com/posts";
      }
      getPrueba(){
            return'hola mundo desde el servicio';
      }
      getArticulos(){
return this._http.get(this.url)
.map(res => res.json());
      }
}