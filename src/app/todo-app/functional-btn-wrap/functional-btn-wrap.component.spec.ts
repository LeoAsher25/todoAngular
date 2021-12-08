import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalBtnWrapComponent } from './functional-btn-wrap.component';

describe('FunctionalBtnWrapComponent', () => {
  let component: FunctionalBtnWrapComponent;
  let fixture: ComponentFixture<FunctionalBtnWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalBtnWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalBtnWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
