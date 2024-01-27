import { TestBed } from '@angular/core/testing';

import { DarkmodetoggleService } from './darkmodetoggle.service';

describe('DarkmodetoggleService', () => {
  let service: DarkmodetoggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkmodetoggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
