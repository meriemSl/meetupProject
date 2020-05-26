import { TestBed, inject } from '@angular/core/testing';

import { GroupServiceService } from './group-service.service';

describe('GroupServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupServiceService]
    });
  });

  it('should be created', inject([GroupServiceService], (service: GroupServiceService) => {
    expect(service).toBeTruthy();
  }));
});
