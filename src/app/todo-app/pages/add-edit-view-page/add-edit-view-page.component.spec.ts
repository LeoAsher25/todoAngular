import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewPageComponent } from './add-edit-view-page.component';

describe('AddEditViewPageComponent', () => {
  let component: AddEditViewPageComponent;
  let fixture: ComponentFixture<AddEditViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
