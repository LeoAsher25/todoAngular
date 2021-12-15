import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/modules/todo-app/shared/services/todo.service';
import { ETodoFilter } from 'src/app/modules/todo-app/type';

@Component({
  selector: 'functional-btn-wrap',
  templateUrl: './functional-btn-wrap.component.html',
  styleUrls: ['./functional-btn-wrap.component.scss'],
})
export class FunctionalBtnWrapComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ETodoFilter = ETodoFilter;
  currentFilter = this.todoService.getCurrentFilter();

  handleAddBtnClick = () => {
    // this.router.navigate(['add-new-todo'], { relativeTo: this.route });
    this.router.navigate(['add-new-todo']);
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
