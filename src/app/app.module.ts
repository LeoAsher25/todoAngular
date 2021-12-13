import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningModule } from './learning/learning.module';
import { TodoAppModule } from './todo-app/todo-app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TodoAppModule, LearningModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
