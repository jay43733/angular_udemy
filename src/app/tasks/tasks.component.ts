import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../dummy-tasks';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) selectName!: string;
  @Input({ required: true }) selectId!: string;

  tasks = dummyTasks;

  get filteredTasksById() {
    return this.tasks.filter((task) => task.userId === this.selectId);
  }

  onDeleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
