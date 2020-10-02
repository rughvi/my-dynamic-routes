import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DLinkComponent } from './d-link.component';

describe('DLinkComponent', () => {
  let component: DLinkComponent;
  let fixture: ComponentFixture<DLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
