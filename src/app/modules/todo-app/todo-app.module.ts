import { EditPageComponent } from 'src/app/modules/todo-app/pages/edit-todo-page/edit-todo-page.component';
import { ViewPageComponent } from 'src/app/modules/todo-app/pages/view-todo-page/view-todo-page.component';
import { AddPageComponent } from 'src/app/modules/todo-app/pages/add-todo-page/add-todo-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FunctionalBtnWrapComponent } from 'src/app/modules/todo-app/components/functional-btn-wrap/functional-btn-wrap.component';
import { TodoItemComponent } from 'src/app/modules/todo-app/components/todo-item/todo-item.component';
import { TodoListComponent } from 'src/app/modules/todo-app/components/todo-list/todo-list.component';
import { AddEditViewFormComponent } from 'src/app/modules/todo-app/components/add-edit-view-form/add-edit-view-form.component';
import { HomePageComponent } from 'src/app/modules/todo-app/pages/home-page/home-page.component';
import { TodoAppRoutingModule } from 'src/app/modules/todo-app/todo-app-routing.module';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    FunctionalBtnWrapComponent,
    AddEditViewFormComponent,
    AddPageComponent,
    ViewPageComponent,
    EditPageComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    TodoAppRoutingModule,
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
})
export class TodoAppModule {}
