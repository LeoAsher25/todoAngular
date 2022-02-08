import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from 'src/app/modules/todo-app/pages/add-todo-page/add-todo-page.component';
import { EditPageComponent } from 'src/app/modules/todo-app/pages/edit-todo-page/edit-todo-page.component';
import { HomePageComponent } from 'src/app/modules/todo-app/pages/home-page/home-page.component';
import { ViewPageComponent } from 'src/app/modules/todo-app/pages/view-todo-page/view-todo-page.component';

const routes: Routes = [
  {
    path: 'add-new-todo',
    component: AddPageComponent,
  },
  {
    path: 'view/:id',
    component: ViewPageComponent,
  },
  {
    path: 'edit/:id',
    component: EditPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class TodoAppRoutingModule {}
