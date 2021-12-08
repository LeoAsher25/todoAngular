import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewDialogComponent } from './add-edit-view-dialog.component';

describe('AddEditViewDialogComponent', () => {
  let component: AddEditViewDialogComponent;
  let fixture: ComponentFixture<AddEditViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditViewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
