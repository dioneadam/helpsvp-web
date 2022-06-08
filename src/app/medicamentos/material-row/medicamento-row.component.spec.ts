import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoRowComponent } from './medicamento-row.component';

describe('MedicamentoRowComponent', () => {
  let component: MedicamentoRowComponent;
  let fixture: ComponentFixture<MedicamentoRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
