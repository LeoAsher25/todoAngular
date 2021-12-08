import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  handleAddBtnClick = (e: any) => {
    console.log('add btn click');
    this.handleDialogOpen(true, EDialogType.ADD);
  };

  handleFilterBtnClick = (e: any) => {
    this.currentFilter = e.target.value;
    console.log('current Fiilter', this.currentFilter);
    console.log('btn click', e.target?.value);
  };

  ngOnInit(): void {}
}
