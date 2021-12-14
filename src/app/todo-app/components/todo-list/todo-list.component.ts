import { Component, OnInit } from '@angular/core';
import { EDialogType, ITodo } from 'src/app/type';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.filteredTodos$.subscribe(
      (todos: ITodo[]) => (this.todos = todos)
    );
  }

  handleChangeTodoStatus(todo: ITodo) {
    this.todoService.updateTodo(todo);
  }

  handleEditTodo(todo: ITodo) {
    this.todoService.getATodo(todo);
    this.todoService.setDialogType(EDialogType.EDIT);
  }

  handleViewTodo(todo: ITodo) {
    this.todoService.getATodo(todo);
    this.todoService.setDialogType(EDialogType.VIEW);
  }

  handleDeleteTodo(todo: ITodo) {
    this.todoService.deleteTodo(todo);
  }
}
