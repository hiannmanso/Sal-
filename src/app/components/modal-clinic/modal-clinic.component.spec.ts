import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClinicComponent } from './modal-clinic.component';

describe('ModalClinicComponent', () => {
  let component: ModalClinicComponent;
  let fixture: ComponentFixture<ModalClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalClinicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
