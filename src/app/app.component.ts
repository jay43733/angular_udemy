import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectUser!: string;

  onSelectName(id: string) {
    this.selectUser = id;
  }

  get selectName() {
    return this.users.find((item) => item.id === this.selectUser)!;
  }
}
