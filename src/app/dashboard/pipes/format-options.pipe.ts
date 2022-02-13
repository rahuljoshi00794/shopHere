import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatOptions'
})
export class FormatOptionsPipe implements PipeTransform {

  transform(value: any, optionKey): string {
    switch (optionKey) {
      case 'price':
        return `equal or above ${value} Rs`
      case 'rating':
        return `equal or above ${value}%`
      case 'discount':
        return `equal or above ${value}%`
      default: return value;
    }
  }

}
