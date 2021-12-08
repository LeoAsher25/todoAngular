import { EDialogType, ITodo } from './../../type';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: ITodo;
  @Input() handleDialogOpen!: (
    isOpen: boolean,
    dialogType?: EDialogType,
    currentTodo?: ITodo
  ) => void;

  handleViewBtnClick = () => {
    this.handleDialogOpen(true, EDialogType.VIEW, this.todo);
  };

  handleEditBtnClick = () => {
    this.handleDialogOpen(true, EDialogType.EDIT, this.todo);
  };

  handleDeleteBtnClick = () => {
    console.log('delete btn click');
  };

  constructor() {}

  ngOnInit(): void {}
}
