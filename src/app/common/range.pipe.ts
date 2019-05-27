import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(array: number[], range: number): number[] {
      array = [];
      for (let i = 0; i < range; i++) {
          array.push(i);
      }

      return array;
  }

}
