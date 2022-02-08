import { AddEditViewFormComponent } from 'src/app/modules/todo-app/components/add-edit-view-form/add-edit-view-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AddEditViewFormComponent', () => {
  let component: AddEditViewFormComponent;
  let fixture: ComponentFixture<AddEditViewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditViewFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditViewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
