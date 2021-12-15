import { Router } from '@angular/router';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ncc-angular-training';
  name = 'Angular' + VERSION.major;

  constructor(private router: Router) {}

  goToToDoAppClick() {
    this.router.navigate(['todo']);
  }
}
