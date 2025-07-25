import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipes'
})
export class ImpurePipesPipe implements PipeTransform {

  transform(value: any[]): number {
    console.log('Impure pipe called');
    return value.length;
  }

}
