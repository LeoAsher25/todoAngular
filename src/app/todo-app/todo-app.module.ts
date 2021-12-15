import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FunctionalBtnWrapComponent } from 'src/app/todo-app/components/functional-btn-wrap/functional-btn-wrap.component';
import { TodoItemComponent } from 'src/app/todo-app/components/todo-item/todo-item.component';
import { TodoListComponent } from 'src/app/todo-app/components/todo-list/todo-list.component';
import { AddEditViewPageComponent } from 'src/app/todo-app/pages/add-edit-view-page/add-edit-view-page.component';
import { HomePageComponent } from 'src/app/todo-app/pages/home-page/home-page.component';
import { TodoAppRoutingModule } from 'src/app/todo-app/todo-app-routing.module';
import { TodoAppComponent } from 'src/app/todo-app/todo-app.component';

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
    TodoAppRoutingModule,
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
