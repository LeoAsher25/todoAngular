import { TodoAppComponent } from 'src/app/modules/todo-app/todo-app.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TodoAppComponent', () => {
  let component: TodoAppComponent;
  let fixture: ComponentFixture<TodoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoAppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
