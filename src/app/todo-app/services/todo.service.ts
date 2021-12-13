import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EDialogType, ETodoFilter, ITodo } from 'src/app/type';
import { TodoApiService } from './todo-api.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnInit {
  constructor(private todoApiService: TodoApiService) {}

  private todos!: ITodo[]; // list todo

  private filteredTodosSubject: BehaviorSubject<ITodo[]> = new BehaviorSubject<
    ITodo[]
  >([]); // filtered list todo Subject of list todos! // follow filteredTodos
  filteredTodos$: Observable<ITodo[]> =
    this.filteredTodosSubject.asObservable();

  // private currentFilter: ETodoFilter = ETodoFilter.All; // current filter
  private currentFilterSubject = new BehaviorSubject<ETodoFilter>(
    ETodoFilter.All
  );
  currentFilter$ = this.currentFilterSubject.asObservable();

  private selectedTodoSubject: BehaviorSubject<ITodo> =
    new BehaviorSubject<ITodo>({
      id: '0',
      name: '',
      isCompleted: false,
      deadline: null,
    });

  selectedTodo$ = this.selectedTodoSubject.asObservable();

  dialogType: EDialogType = EDialogType.ADD;

  setCurrentFilter(value: ETodoFilter) {
    this.currentFilterSubject.next(value);
  }

  setDialogType(value: EDialogType) {
    this.dialogType = value;
  }

  getAllTodo() {
    this.todoApiService
      .getAllTodoApi()
      .subscribe((todos) => (this.todos = todos));

    this.filteredTodosSubject.next(this.todos);
  }

  filterTodos(filter: ETodoFilter) {
    this.currentFilterSubject.next(filter);

    switch (filter) {
      case ETodoFilter.Active:
        this.filteredTodosSubject.next(
          this.todos.filter((todo: ITodo) => !todo.isCompleted)
        );
        break;

      case ETodoFilter.Completed:
        this.filteredTodosSubject.next(
          this.todos.filter((todo: ITodo) => todo.isCompleted)
        );
        break;

      case ETodoFilter.All:
        this.filteredTodosSubject.next([
          ...this.todos.map((todo) => ({ ...todo })),
        ]);
    }
  }

  addTodo(newTodo: ITodo) {
    const date = new Date(Date.now()).getTime();
    newTodo.id = date.toString();
    this.todos.unshift({ ...newTodo });
  }

  updateTodo(updatedTodo: ITodo) {
    const currentIndex = this.todos.findIndex(
      (todoItem) => todoItem.id === updatedTodo.id
    );
    this.todos.splice(currentIndex, 1, updatedTodo);
  }

  deleteTodo(deletedTodo: ITodo) {
    this.todos = this.todos.filter((todo: ITodo) => todo.id !== deletedTodo.id);
  }

  getATodo(todo: ITodo) {
    this.selectedTodoSubject.next(todo);
  }

  ngOnInit(): void {}
}
