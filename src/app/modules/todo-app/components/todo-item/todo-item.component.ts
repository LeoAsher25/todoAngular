import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITodo } from 'src/app/modules/todo-app/type';
import * as moment from 'moment';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: ITodo;
  @Output() handleChangeTodoStatus: EventEmitter<ITodo> =
    new EventEmitter<ITodo>();
  @Output() handleViewTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() handleEditTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() handleDeleteTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  handleViewBtnClick = () => {
    // this.router.navigate([`view/${this.todo.id}`], { relativeTo: this.route });
    this.router.navigate([`view/${this.todo.id}`]);
    this.handleViewTodo.emit(this.todo);
  };

  handleEditBtnClick = () => {
    // this.router.navigate([`edit/${this.todo.id}`], { relativeTo: this.route });
    this.router.navigate([`edit/${this.todo.id}`]);
    this.handleEditTodo.emit(this.todo);
  };

  handleDeleteBtnClick = () => {
    this.handleDeleteTodo.emit(this.todo);
  };

  changeTodoStatus() {
    this.handleChangeTodoStatus.emit({
      ...this.todo,
      isCompleted: !this.todo.isCompleted,
    });
  }

  isExpireSoon() {
    if (
      !this.todo.isCompleted &&
      moment(this.todo.deadline).isAfter(moment())
    ) {
      const dl = moment(this.todo.deadline);
      const now = moment();
      return dl.diff(now, 'minutes') < 60;
    }
    return false;
  }

  isExpired() {
    return (
      !this.todo.isCompleted && moment(this.todo.deadline).isBefore(moment())
    );
  }
}
