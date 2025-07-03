import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  constructor(private router: Router) {}

  login() {
    // this.router.navigateByUrl('data-binding');
    this.router.navigate(['ngfor-vs-for'])
  }
}
