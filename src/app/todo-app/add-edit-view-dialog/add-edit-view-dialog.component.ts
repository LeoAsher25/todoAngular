import { Component, Input, OnInit } from '@angular/core';
import { EDialogType, ITodo } from 'src/app/type';

@Component({
  selector: 'add-edit-view-dialog',
  templateUrl: './add-edit-view-dialog.component.html',
  styleUrls: ['./add-edit-view-dialog.component.scss'],
})
export class AddEditViewDialogComponent implements OnInit {
  @Input() currentTodo: ITodo = {
    id: '0',
    name: '',
    isCompleted: true,
    deadline: '',
  };

  @Input() dialogType!: EDialogType;
  @Input() dialogOpen: boolean = false;

  @Input() handleDialogOpen!: (
    isOpen: boolean,
    dialogType?: EDialogType,
    currentTodo?: ITodo
  ) => void;

  handleCloseBtnClick = () => {
    this.handleDialogOpen(false);
  };

  EDialogType = EDialogType;

  constructor() {}

  ngOnInit(): void {}
}
