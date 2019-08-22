import { TestBed } from '@angular/core/testing';

import { NgxAbbreviateNumberService } from './ngx-abbreviate-number.service';

describe('NgxAbbreviateNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAbbreviateNumberService = TestBed.get(NgxAbbreviateNumberService);
    expect(service).toBeTruthy();
  });
});
