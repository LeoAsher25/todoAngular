import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorDetailComponent } from './authors/author-detail.component';
import { AuthorListComponent } from './authors/author-list.component';
import { AuthorsComponent } from './authors/authors.component';
import { TodoAppModule } from './todo-app/todo-app.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorDetailComponent,
    AuthorListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TodoAppModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
