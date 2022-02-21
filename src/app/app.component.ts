import {
  EDialogType,
  ERequestStatus,
  ETodoFilter,
  ITodo,
} from 'src/app/modules/todo-app/shared/types';
import { Router } from '@angular/router';
import { Component, VERSION, OnInit } from '@angular/core';
import { TodoService } from 'src/app/modules/todo-app/shared/services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private todoService: TodoService) {}
  ERequestStatus = ERequestStatus;
  requestStatus$: Observable<ERequestStatus> = new Observable();

  ngOnInit(): void {
    this.requestStatus$ = this.todoService.requestStatus$;
  }

  goToToDoAppClick() {
    this.router.navigate(['todo']);
  }
}
