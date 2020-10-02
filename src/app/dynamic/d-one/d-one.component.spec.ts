import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOneComponent } from './d-one.component';

describe('DOneComponent', () => {
  let component: DOneComponent;
  let fixture: ComponentFixture<DOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
