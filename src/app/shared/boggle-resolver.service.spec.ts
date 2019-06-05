import { TestBed } from '@angular/core/testing';

import { BoggleResolverService } from './boggle-resolver.service';

describe('BoggleResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoggleResolverService = TestBed.get(BoggleResolverService);
    expect(service).toBeTruthy();
  });
});
