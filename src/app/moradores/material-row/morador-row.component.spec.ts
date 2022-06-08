import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradorRowComponent } from './morador-row.component';

describe('MoradorRowComponent', () => {
  let component: MoradorRowComponent;
  let fixture: ComponentFixture<MoradorRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoradorRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
