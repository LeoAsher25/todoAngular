import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, take } from 'rxjs/operators';
import { ITodo } from 'src/app/modules/todo-app/shared/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getAllTodoApi(): Observable<ITodo[]> {
    return this.http
      .get<ITodo[]>(environment.serveUrl)
      .pipe(catchError(this.handleError), take(1));
  }

  getTodoByIdApi(id: string): Observable<ITodo> {
    return this.http
      .get<ITodo>(`${environment.serveUrl}/${id}`)
      .pipe(catchError(this.handleError), take(1));
  }

  deleteTodoApi(id: string): Observable<ITodo> {
    return this.http
      .delete<ITodo>(`${environment.serveUrl}/${id}`)
      .pipe(catchError(this.handleError), take(1));
  }

  addTodoApi(todo: ITodo): Observable<ITodo> {
    return this.http
      .post<ITodo>(environment.serveUrl, todo)
      .pipe(catchError(this.handleError), take(1));
  }

  putTodoApi(todo: ITodo): Observable<ITodo> {
    return this.http
      .put<ITodo>(`${environment.serveUrl}/${todo.id}`, todo)
      .pipe(catchError(this.handleError), take(1));
  }

  handleError(error: HttpErrorResponse) {
    let errMessage = {
      title: '',
      message: '',
    };
    if (error.status === 0) {
      errMessage.message = `Error: ${error.message}`;
    } else {
      errMessage.title = `Error code: ${error.status}`;
      errMessage.message = `Message: ${error.message}`;
    }

    return throwError(errMessage);
  }
}
