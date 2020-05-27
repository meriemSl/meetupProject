import { TestBed, inject } from '@angular/core/testing';

<<<<<<< HEAD
import {ApiService} from './api-service.service';
=======
import {ApiServiceService} from './api-service.service';
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f

describe('ApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      providers: [ApiService]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
=======
      providers: [ApiServiceService]
    });
  });

  it('should be created', inject([ApiServiceService], (service: ApiServiceService) => {
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f
    expect(service).toBeTruthy();
  }));
});
