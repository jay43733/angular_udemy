import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from '../dummy-users';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
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
