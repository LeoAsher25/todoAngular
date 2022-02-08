import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { TodoService } from 'src/app/modules/todo-app/shared/services/todo.service';
import { EDialogType, ITodo } from 'src/app/modules/todo-app/shared/types';

@Component({
  selector: 'edit-todo-page',
  templateUrl: './edit-todo-page.component.html',
})
export class EditPageComponent implements OnInit {
  dialogType = EDialogType.EDIT;

  currentTodo: ITodo = {
    id: '0',
    name: '',
    isCompleted: false,
    deadline: null,
  };

  constructor(
    private readonly router: Router,
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(pluck('id')).subscribe((paramId) => {
      this.todoService.getTodoById(paramId);
      this.todoService.selectedTodo$.subscribe(
        (todo) => (this.currentTodo = todo)
      );
    });
  }

  handleCloseBtnClick = () => {
    this.router.navigate(['']);
  };

  handleFormSubmit(newTodo: ITodo) {
    this.todoService.updateTodo(newTodo);
    this.currentTodo.name = '';
    this.currentTodo.deadline = null;
  }
}
