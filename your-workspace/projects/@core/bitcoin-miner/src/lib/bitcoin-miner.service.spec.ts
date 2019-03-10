import { TestBed } from '@angular/core/testing';

import { BitcoinMinerService } from './bitcoin-miner.service';

describe('BitcoinMinerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitcoinMinerService = TestBed.get(BitcoinMinerService);
    expect(service).toBeTruthy();
  });
});
