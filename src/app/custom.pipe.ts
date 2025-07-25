import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  private DatePipe = new DatePipe('en-US');

  transform(value: any, ...args: any[]): unknown {
    // return value ? '+91 '+value:value;
    return this.DatePipe.transform(value,'MM/YYYY');
  }

}
