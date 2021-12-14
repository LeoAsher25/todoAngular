import { TodoService } from './../../services/todo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EDialogType, ETodoFilter, ITodo } from 'src/app/type';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'functional-btn-wrap',
  templateUrl: './functional-btn-wrap.component.html',
  styleUrls: ['./functional-btn-wrap.component.scss'],
})
export class FunctionalBtnWrapComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private todoService: TodoService
  ) {}

  ETodoFilter = ETodoFilter;
  currentFilter = this.todoService.getCurrentFilter();

  handleAddBtnClick = () => {
    this.router.navigate(['/add-new-todo']);
  };

  handleFilterBtnClick = (e: Event) => {
    this.todoService.setCurrentFilter(
      (e.target as HTMLInputElement).value as ETodoFilter
    );
    this.currentFilter = this.todoService.getCurrentFilter();
    this.todoService.handleFilter();
  };

  ngOnInit(): void {}
}
