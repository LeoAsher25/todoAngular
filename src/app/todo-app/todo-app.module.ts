import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FunctionalBtnWrapComponent } from './components/functional-btn-wrap/functional-btn-wrap.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddEditViewPageComponent } from './pages/add-edit-view-page/add-edit-view-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TodoAppComponent } from './todo-app.component';

@NgModule({
  declarations: [
    TodoAppComponent,
    TodoListComponent,
    TodoItemComponent,
    AddEditViewPageComponent,
    FunctionalBtnWrapComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      progressBar: true,
      closeButton: true,
    }),
  ],
  exports: [TodoAppComponent],
  bootstrap: [TodoAppComponent],
})
export class TodoAppModule {}
