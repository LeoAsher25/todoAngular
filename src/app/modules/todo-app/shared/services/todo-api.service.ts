import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/modules/todo-app/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  constructor(private http: HttpClient) {}

  getAllTodoApi(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(environment.serveUrl);
  }

  getTodoByIdApi(id: string): Observable<ITodo> {
    return this.http.get<ITodo>(`${environment.serveUrl}/${id}`);
  }

  deleteTodoApi(id: string): Observable<ITodo> {
    return this.http.delete<ITodo>(`${environment.serveUrl}/${id}`);
  }

  addTodoApi(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(environment.serveUrl, todo);
  }

  putTodoApi(todo: ITodo): Observable<ITodo> {
    return this.http.put<ITodo>(`${environment.serveUrl}/${todo.id}`, todo);
  }
}
