import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirElementoComponent } from './subir-elemento.component';

describe('SubirElementoComponent', () => {
  let component: SubirElementoComponent;
  let fixture: ComponentFixture<SubirElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirElementoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
