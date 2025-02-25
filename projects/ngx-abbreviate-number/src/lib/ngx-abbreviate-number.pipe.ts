import { Pipe, PipeTransform } from '@angular/core';
import { ConvertZeroesService } from './ngx-abbreviate-number.service';

const DECIMAL_PLACES = 1;

@Pipe({
  name: 'abbreviateNumber',
  standalone: true,
})
export class NgxAbbreviateNumberPipe implements PipeTransform {

  transform(value: number, decimalPlaces: number | string = DECIMAL_PLACES): string {
    if (!value) {
      return '0';
    }

    let sign = '';
    const absoluteValue: number = Math.abs(+value);
    if (value < 0) {
      sign = '-';
    }
    return `${sign}${ConvertZeroesService.abbreviateNumber(absoluteValue, +decimalPlaces || DECIMAL_PLACES)}`;
  }
}
