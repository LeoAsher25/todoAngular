import { Component, OnInit } from '@angular/core';
import { authors } from '../authors.model';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  authors = authors;

  constructor() {}

  ngOnInit(): void {}
}
