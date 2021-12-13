import { TodoService } from './../../services/todo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EDialogType, ETodoFilter, ITodo } from 'src/app/type';

@Component({
  selector: 'functional-btn-wrap',
  templateUrl: './functional-btn-wrap.component.html',
  styleUrls: ['./functional-btn-wrap.component.scss'],
})
export class FunctionalBtnWrapComponent implements OnInit {
  @Input() handleDialogOpen!: (
    isOpen: boolean,
    dialogType?: EDialogType,
    currentTodo?: ITodo
  ) => void;

  ETodoFilter = ETodoFilter;

  currentFilter = ETodoFilter.All;

  constructor(
    private readonly router: Router,
    private todoService: TodoService
  ) {}

  handleAddBtnClick = (e: any) => {
    this.router.navigate(['/add-new-todo']);
  };

  handleFilterBtnClick = (e: any) => {
    this.currentFilter = e.target.value;
    this.todoService.setCurrentFilter(this.currentFilter);
  };

  ngOnInit(): void {}
}
