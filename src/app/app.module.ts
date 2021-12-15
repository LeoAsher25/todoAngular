import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { TodoAppModule } from 'src/app/todo-app/todo-app.module';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoAppModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
