import { Author, authors } from '../authors.model';
import { Component } from '@angular/core';

@Component({
  selector: 'author-list',
  template: `
    <author-detail
      *ngFor="let author of authors"
      [author]="author"
      (select)="onSelected($event)"
      (delete)="onDeleted($event)"
      [onClick]="onClick1"
    ></author-detail>

    <b>
      current selected author: {{ currentAuthor?.firstName }}
      {{ currentAuthor.lastName }}
    </b>
  `,
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor: Author = authors[0];

  onClick1 = (author: Author) => {
    this.currentAuthor = author;
  };

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }

  onDeleted(selectedAuthorID: number) {
    this.authors = this.authors.filter(
      (author: Author) => author.id !== selectedAuthorID
    );

    if (this.currentAuthor.id === selectedAuthorID) {
      this.currentAuthor = this.authors[0];
    }
  }
}
