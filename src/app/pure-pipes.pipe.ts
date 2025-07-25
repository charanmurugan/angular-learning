import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipes'
})
export class PurePipesPipe implements PipeTransform {

    transform(value: number): number {
      console.log('Pure pipe called');
      return value * 2;
    }
  }
