import { TestBed } from '@angular/core/testing';

import { CargarSkilService } from './cargar-skil.service';

describe('CargarSkilService', () => {
  let service: CargarSkilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarSkilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
