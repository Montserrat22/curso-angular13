import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
      name:'conversor'
})
export class ConversorPipe implements PipeTransform{
      transform(value:any, por:any) {
          let value_one =parseInt(value);
          let value_two =parseInt(por);

          let result= "la multiplicacion:" + value_one + " X " + value_two+ " = "+ (value_one*value_two);
           return result;
      }
}