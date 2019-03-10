import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinMinerComponent } from './bitcoin-miner.component';

describe('BitcoinMinerComponent', () => {
  let component: BitcoinMinerComponent;
  let fixture: ComponentFixture<BitcoinMinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinMinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinMinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
