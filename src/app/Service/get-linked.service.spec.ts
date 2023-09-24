import { TestBed } from '@angular/core/testing';

import { GetLinkedService } from './get-linked.service';

describe('GetLinkedService', () => {
  let service: GetLinkedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLinkedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
