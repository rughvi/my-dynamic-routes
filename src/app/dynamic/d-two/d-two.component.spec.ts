import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTwoComponent } from './d-two.component';

describe('DTwoComponent', () => {
  let component: DTwoComponent;
  let fixture: ComponentFixture<DTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
