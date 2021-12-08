import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAppComponent } from './todo-app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddEditViewDialogComponent } from './add-edit-view-dialog/add-edit-view-dialog.component';
import { FunctionalBtnWrapComponent } from './functional-btn-wrap/functional-btn-wrap.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoAppComponent,
    TodoItemComponent,
    AddEditViewDialogComponent,
    FunctionalBtnWrapComponent,
  ],
  imports: [CommonModule],
  exports: [TodoAppComponent],
})
export class TodoAppModule {}
