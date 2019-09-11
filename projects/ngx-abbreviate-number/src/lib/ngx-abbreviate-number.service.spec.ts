import { TestBed } from '@angular/core/testing';

import { ConvertZeroesService } from './ngx-abbreviate-number.service';

describe('ConvertZeroesService.abbreviateNumber', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvertZeroesService = TestBed.get(ConvertZeroesService);
    expect(service).toBeTruthy();
  });

  it('should return converted string from abbreviateNumber when there is a number ', () => {
    expect(ConvertZeroesService.abbreviateNumber(1000)).toEqual('1K');
  });

  it('should return converted string from abbreviateNumber when there is a number ', () => {
    expect(ConvertZeroesService.abbreviateNumber(0)).toEqual('0');
  });

  it('should return converted string from abbreviateNumber when there is a number ', () => {
    expect(ConvertZeroesService.abbreviateNumber(25458888880000)).toEqual('25T');
  });
});
