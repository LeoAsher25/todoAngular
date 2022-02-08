import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<p>Home Page ne</p>`,
})
export class HomeComponent {
  title = 'ncc-angular-training';
  name = 'Angular' + VERSION.major;

  constructor() {}
}
