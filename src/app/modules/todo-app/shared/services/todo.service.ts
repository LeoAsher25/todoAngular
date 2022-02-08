import { catchError, retry, take } from 'rxjs/operators';
import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  EDialogType,
  ETodoFilter,
  ITodo,
} from 'src/app/modules/todo-app/shared/types';
import { TodoApiService } from './todo-api.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnInit {
  constructor(
    private todoApiService: TodoApiService,
    private toast: ToastrService
  ) {}

  private todos!: ITodo[]; // list todo

  private filteredTodosSubject: BehaviorSubject<ITodo[]> = new BehaviorSubject<
    ITodo[]
  >([]);
  filteredTodos$: Observable<ITodo[]> =
    this.filteredTodosSubject.asObservable();

  //  currentFilter
  private currentFilterSubject = new BehaviorSubject<ETodoFilter>(
    ETodoFilter.All
  );
  currentFilter$ = this.currentFilterSubject.asObservable();

  private selectedTodo: BehaviorSubject<ITodo> = new BehaviorSubject<ITodo>({
    id: '',
    name: '',
    isCompleted: false,
    deadline: null,
  });

  selectedTodo$: Observable<ITodo> = this.selectedTodo.asObservable();

  setCurrentFilter(value: ETodoFilter) {
    this.currentFilterSubject.next(value);
  }

  getCurrentFilter(): ETodoFilter {
    return this.currentFilterSubject.getValue();
  }

  // dialogType
  dialogType: EDialogType = EDialogType.ADD;

  setDialogType(value: EDialogType) {
    this.dialogType = value;
  }

  getDialogType(): EDialogType {
    return this.dialogType;
  }

  getTodoById(id: string) {
    return this.todoApiService.getTodoByIdApi(id).subscribe(
      (todo) => this.selectedTodo.next(todo),
      (error) => {
        this.toast.error(error.message, error.title ? error.title : '');
      }
    );
  }

  //methods
  getAllTodo() {
    this.todoApiService.getAllTodoApi().subscribe((todos) => {
      this.todos = todos;
      this.filteredTodosSubject.next(this.todos);
      this.handleFilter();
    });
  }

  addTodo(newTodo: ITodo) {
    const date = new Date(Date.now()).getTime();
    newTodo.id = date.toString();
    this.todoApiService.addTodoApi(newTodo).subscribe(
      (addedTodo) => {
        this.todos.push({ ...addedTodo });
        this.filteredTodosSubject.next(this.todos);
        this.handleFilter();
        this.toast.success('Add todo successfully!');
      },
      (error) => {
        this.toast.error(error.message, error.title ? error.title : '');
      }
    );
  }

  updateTodo(updatedTodo: ITodo) {
    this.todoApiService.putTodoApi(updatedTodo).subscribe(
      (newTodo) => {
        this.todos = this.todos.map((todo) =>
          todo.id === newTodo.id ? newTodo : todo
        );
        this.filteredTodosSubject.next(this.todos);
        this.handleFilter();
        this.toast.success('Update todo successfully!');
      },
      (error) => {
        this.toast.error(error.message, error.title ? error.title : '');
      }
    );
  }

  deleteTodo(deletedTodo: ITodo) {
    this.todoApiService
      .deleteTodoApi(deletedTodo.id)

      .subscribe(
        (delTodo) => {
          this.todos = this.todos.filter((todo) => todo.id !== delTodo.id);
          this.filteredTodosSubject.next(this.todos);
          this.handleFilter();
          this.toast.success('Add todo successfully!');
        },
        (error) => {
          this.toast.error(error.message, error.title ? error.title : '');
        }
      );
  }

  handleFilter() {
    switch (this.currentFilterSubject.getValue()) {
      case ETodoFilter.Active:
        this.filteredTodosSubject.next(
          this.todos.filter((todo) => !todo.isCompleted)
        );
        break;

      case ETodoFilter.Completed:
        this.filteredTodosSubject.next(
          this.todos.filter((todo) => todo.isCompleted)
        );
        break;

      case ETodoFilter.All:
        this.filteredTodosSubject.next([...this.todos]);
        break;
    }
  }

  ngOnInit(): void {}
}
