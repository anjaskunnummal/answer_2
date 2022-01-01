/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccessAPIService } from './access-API.service';

describe('Service: AccessAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessAPIService]
    });
  });

  it('should ...', inject([AccessAPIService], (service: AccessAPIService) => {
    expect(service).toBeTruthy();
  }));
});
