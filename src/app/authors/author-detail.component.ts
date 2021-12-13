import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../authors.model';

@Component({
  selector: 'author-detail',
  template: `
    <div [style.margin-top.rem]="1">
      {{ author?.firstName }} {{ author?.lastName }}
      <button [style.margin-left.rem]="1" (click)="select.emit(author)">
        Select1
      </button>
      <button [style.margin-left.rem]="1" (click)="onClick(author)">
        Select2
      </button>
      <button [style.margin-left.rem]="1" (click)="delete.emit(author.id)">
        X
      </button>
    </div>
  `,
})
export class AuthorDetailComponent {
  @Input() author!: Author;
  @Input() onClick!: (author: Author) => void;

  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
