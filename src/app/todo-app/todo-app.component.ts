import { EDialogType, ITodo } from './../type';
import { todoList } from './todoList.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent implements OnInit {
  todoList: ITodo[] = todoList;
  dialogOpen: boolean = false;
  currentTodo!: ITodo;
  dialogType: EDialogType = EDialogType.ADD;

  handleDialogOpen = (
    isOpen: boolean,
    dialogType?: EDialogType,
    currentTodo?: ITodo
  ) => {
    this.dialogOpen = isOpen;
    this.dialogType = dialogType ? dialogType : EDialogType.ADD;
    if (currentTodo) this.currentTodo = currentTodo;
  };

  constructor() {}

  ngOnInit(): void {}
}
