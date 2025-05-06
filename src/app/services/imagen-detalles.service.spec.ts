import { TestBed } from '@angular/core/testing';

import { ImagenDetalleService } from './imagen-detalles.service';

describe('ImagenDetallesService', () => {
  let service: ImagenDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
