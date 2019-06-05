import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(array: number[], max: number, min: number = 0): number[] {
      array = [];
      for (let i = min; i < max; i++) {
          array.push(i);
      }

      return array;
  }

}
