import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditViewPageComponent } from './todo-app/pages/add-edit-view-page/add-edit-view-page.component';
import { HomePageComponent } from './todo-app/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
