import { TestBed } from '@angular/core/testing';

import { InfosDbService } from './infos-db.service';

describe('InfosDbService', () => {
  let service: InfosDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfosDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
