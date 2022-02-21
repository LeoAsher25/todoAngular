import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { TodoAppModule } from 'src/app/modules/todo-app/todo-app.module';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoAppModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      progressBar: true,
      closeButton: true,
    }),
  ],
  declarations: [AppComponent, LoadingComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
