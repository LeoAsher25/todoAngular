import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { TodoService } from 'src/app/modules/todo-app/shared/services/todo.service';
import { EDialogType, ITodo } from 'src/app/modules/todo-app/type';

@Component({
  selector: 'view-todo-page',
  templateUrl: './view-todo-page.component.html',
})
export class ViewPageComponent implements OnInit {
  EDialogType = EDialogType;
  dialogType = EDialogType.VIEW;

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
    this.route.params
      .pipe(pluck('id'))
      .subscribe((paramId) =>
        this.todoService
          .getTodoById(paramId)
          .subscribe((todo) => (this.currentTodo = todo))
      );
  }

  handleCloseBtnClick = () => {
    this.router.navigate(['']);
  };

  handleFormSubmit() {}
}
