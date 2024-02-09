import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Mayuscula'
})
export class MyPipePipe implements PipeTransform {

  transform(valor: string): string {
    return valor.toUpperCase();
  }

}
