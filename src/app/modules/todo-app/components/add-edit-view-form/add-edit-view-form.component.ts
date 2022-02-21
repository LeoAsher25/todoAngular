import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EDialogType, ITodo } from 'src/app/modules/todo-app/shared/types';

@Component({
  selector: 'add-edit-view-form',
  templateUrl: './add-edit-view-form.component.html',
  styleUrls: ['./add-edit-view-form.component.scss'],
})
export class AddEditViewFormComponent implements OnInit {
  EDialogType = EDialogType;

  @Input() handleCloseBtnClick!: () => void;
  @Input() dialogType: EDialogType = EDialogType.ADD;

  @Input() currentTodo: ITodo = {
    id: '0',
    name: '',
    isCompleted: false,
    deadline: null,
  };

  @Output() handleFormSubmit: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  alertEmpty = {
    name: false,
    deadline: false,
  };

  constructor() {}

  ngOnInit(): void {}

  checkInputName() {
    if (!this.currentTodo.name) {
      this.alertEmpty.name = true;
      return false;
    }
    this.alertEmpty.name = false;
    return true;
  }

  checkInputDeadline() {
    if (!this.currentTodo.deadline) {
      this.alertEmpty.deadline = true;
      return false;
    }
    this.alertEmpty.deadline = false;
    return true;
  }

  onSubmit() {
    this.checkInputName();
    this.checkInputDeadline();

    if (!this.alertEmpty.name && !this.alertEmpty.deadline) {
      this.handleFormSubmit.emit(this.currentTodo);
      this.handleCloseBtnClick();
    }
  }
}
