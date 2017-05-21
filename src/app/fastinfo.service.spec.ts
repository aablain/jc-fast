/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FastinfoService } from './fastinfo.service';

describe('FastinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FastinfoService]
    });
  });

  it('should ...', inject([FastinfoService], (service: FastinfoService) => {
    expect(service).toBeTruthy();
  }));
});
