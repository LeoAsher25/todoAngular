import { TodoService } from 'src/app/modules/todo-app/shared/services/todo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EDialogType, ITodo } from 'src/app/modules/todo-app/type';

@Component({
  selector: 'add-edit-view-page',
  templateUrl: './add-edit-view-page.component.html',
  // template: `<p>Add page</p>`,
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
    private route: ActivatedRoute,
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
    // this.router.navigate([''], { relativeTo: this.route });
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
      if (this.dialogType === EDialogType.ADD)
        this.todoService.addTodo(this.currentTodo);
      else {
        this.todoService.updateTodo(this.currentTodo);
        this.currentTodo.name = '';
        this.currentTodo.deadline = null;
      }
      // this.router.navigate([''], { relativeTo: this.route });
      this.router.navigate(['']);
    }
  }
}
