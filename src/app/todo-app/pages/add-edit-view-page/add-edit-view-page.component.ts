import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EDialogType, ITodo } from 'src/app/type';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'add-edit-view-page',
  templateUrl: './add-edit-view-page.component.html',
  styleUrls: ['./add-edit-view-page.component.scss'],
})
export class AddEditViewPageComponent implements OnInit {
  @Input() dialogOpen: boolean = false;
  @Input() handleDialogOpen!: (
    isOpen: boolean,
    dialogType?: EDialogType,
    currentTodo?: ITodo
  ) => void;

  EDialogType = EDialogType;
  dialogType = EDialogType.ADD;

  currentTodo: ITodo = {
    id: '0',
    name: '',
    isCompleted: false,
    deadline: null,
  };

  currentTodoName = this.currentTodo.name;

  alertEmpty = {
    name: false,
    deadline: false,
  };

  constructor(
    private readonly router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.dialogType = this.todoService.dialogType;
    if (this.dialogType !== EDialogType.ADD) {
      this.todoService.selectedTodo$.subscribe(
        (todo) => (this.currentTodo = todo)
      );
      this.currentTodoName = this.currentTodo.name;
    }
  }

  handleCloseBtnClick = () => {
    this.router.navigate(['']);
  };

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

  handleFormSubmit() {
    this.checkInputName();
    this.checkInputDeadline();

    if (!this.alertEmpty.name && !this.alertEmpty.deadline) {
      this.dialogType === EDialogType.ADD
        ? this.todoService.addTodo(this.currentTodo)
        : this.todoService.updateTodo(this.currentTodo);

      this.router.navigate(['']);
    }
  }
}
