import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TodoAppModule } from 'src/app/modules/todo-app/todo-app.module';
@NgModule({
  imports: [BrowserModule, AppRoutingModule, TodoAppModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
