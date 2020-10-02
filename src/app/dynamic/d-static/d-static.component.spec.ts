import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DStaticComponent } from './d-static.component';

describe('DStaticComponent', () => {
  let component: DStaticComponent;
  let fixture: ComponentFixture<DStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
