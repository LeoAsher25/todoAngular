import { FunctionalBtnWrapComponent } from 'src/app/modules/todo-app/components/functional-btn-wrap/functional-btn-wrap.component';
import { TodoItemComponent } from 'src/app/modules/todo-app/components/todo-item/todo-item.component';
import { TodoListComponent } from 'src/app/modules/todo-app/components/todo-list/todo-list.component';
import { TodoAppComponent } from 'src/app/modules/todo-app/todo-app.component';
import { HomePageComponent } from 'src/app/modules/todo-app/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditViewPageComponent } from 'src/app/modules/todo-app/pages/add-edit-view-page/add-edit-view-page.component';

const routes: Routes = [
  {
    path: 'add-new-todo',
    component: AddEditViewPageComponent,
  },
  {
    path: 'view/:id',
    component: AddEditViewPageComponent,
  },
  {
    path: 'edit/:id',
    component: AddEditViewPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class TodoAppRoutingModule {}
