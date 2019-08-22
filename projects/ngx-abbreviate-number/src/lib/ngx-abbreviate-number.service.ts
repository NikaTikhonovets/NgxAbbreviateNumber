import { Injectable } from '@angular/core';

const SUFFIXES = ['K', 'M', 'B', 'T'];

@Injectable({
  providedIn: 'root'
})
export class ConvertZeroesService {

  public static abbreviateNumber(value: number, decPlaces: number = 0): string {
    let abbreviationNumber: string = Math.round(value).toString();
    let suffixesCount: number = SUFFIXES.length;

    decPlaces = Math.pow(10, decPlaces);

    for (let i = suffixesCount - 1; i >= 0; i--) {
      let size = Math.pow(10, (i + 1) * 3);

      if (size <= value) {
        abbreviationNumber = (Math.round(value * decPlaces / size) / decPlaces).toString();
        abbreviationNumber += SUFFIXES[i];

        break;
      }
    }

    return abbreviationNumber;
  }

  public static lengthenNumber(value: string): number {
    let [num, suffix] = value.match(/\d+|\w+/g);
    let suffixNum = SUFFIXES.indexOf(suffix);
    let lengthenedNumber = parseInt(num, 10);

    if (suffixNum !== -1) {
      lengthenedNumber *= Math.pow(10, (suffixNum + 1) * 3);
    }

    return lengthenedNumber;
  }
}
