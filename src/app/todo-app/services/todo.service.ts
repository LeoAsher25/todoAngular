import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { EDialogType, ETodoFilter, ITodo } from 'src/app/type';
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

  //selectedTodo
  private selectedTodoSubject: BehaviorSubject<ITodo> =
    new BehaviorSubject<ITodo>({
      id: '0',
      name: '',
      isCompleted: false,
      deadline: null,
    });

  selectedTodo$ = this.selectedTodoSubject.asObservable();

  //  currentFilter
  private currentFilterSubject = new BehaviorSubject<ETodoFilter>(
    ETodoFilter.All
  );
  currentFilter$ = this.currentFilterSubject.asObservable();

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

  //methods
  getAllTodo() {
    this.todoApiService.getAllTodoApi().subscribe(
      (todos) => {
        this.todos = todos;
        this.filteredTodosSubject.next(this.todos);
        this.handleFilter();
      },
      (error) => this.toast.error(error.message)
    );
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
      (error) => this.toast.error(error.message)
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
      (error) => this.toast.error(error.message)
    );
  }

  deleteTodo(deletedTodo: ITodo) {
    this.todoApiService.deleteTodoApi(deletedTodo.id).subscribe(
      (delTodo) => {
        this.todos = this.todos.filter((todo) => todo.id !== delTodo.id);
        this.filteredTodosSubject.next(this.todos);
        this.handleFilter();
        this.toast.success('Add todo successfully!');
      },
      (error) => {
        this.toast.error(error.message);
      }
    );
  }

  getATodo(todo: ITodo) {
    this.selectedTodoSubject.next(todo);
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
