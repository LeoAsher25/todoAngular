import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/modules/todo-app/shared/services/todo.service';
import { EDialogType, ITodo } from 'src/app/modules/todo-app/shared/types';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.todoService.filteredTodos$.subscribe((todos: ITodo[]) => {
      this.todos = todos;
    });
  }

  handleChangeTodoStatus(todo: ITodo) {
    this.todoService.updateTodo(todo);
  }

  handleEditTodo(todo: ITodo) {
    this.router.navigate([`edit/${todo.id}`]);
    this.todoService.setDialogType(EDialogType.EDIT);
  }

  handleViewTodo(todo: ITodo) {
    this.router.navigate([`view/${todo.id}`]);
    this.todoService.setDialogType(EDialogType.VIEW);
  }

  handleDeleteTodo(todo: ITodo) {
    this.todoService.deleteTodo(todo);
  }
}
