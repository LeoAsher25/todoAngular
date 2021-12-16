import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/modules/todo-app/shared/services/todo.service';
import { EDialogType, ITodo } from 'src/app/modules/todo-app/type';

@Component({
  selector: 'add-todo-page',
  templateUrl: './add-todo-page.component.html',
})
export class AddPageComponent implements OnInit {
  EDialogType = EDialogType;
  dialogType = EDialogType.ADD;

  currentTodo: ITodo = {
    id: '0',
    name: '',
    isCompleted: false,
    deadline: null,
  };

  constructor(
    private readonly router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {}

  handleCloseBtnClick = () => {
    this.router.navigate(['']);
  };

  handleFormSubmit(newTodo: ITodo) {
    console.log('add');
    this.todoService.addTodo(newTodo);
  }
}
