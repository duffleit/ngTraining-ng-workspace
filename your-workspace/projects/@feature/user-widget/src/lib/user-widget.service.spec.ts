import { TestBed } from '@angular/core/testing';

import { UserWidgetService } from './user-widget.service';

describe('UserWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserWidgetService = TestBed.get(UserWidgetService);
    expect(service).toBeTruthy();
  });
});
