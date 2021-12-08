import { Component, Input, OnInit } from '@angular/core';
import { EDialogType, ITodo } from 'src/app/type';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todoList!: ITodo[];
  @Input() handleDialogOpen!: (
    isOpen: boolean,
    dialogType?: EDialogType,
    currentTodo?: ITodo
  ) => void;
  constructor() {}

  ngOnInit(): void {}
}
