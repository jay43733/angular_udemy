import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {}
  @Input({ required: true }) selectName!: string;
  @Input({ required: true }) selectId!: string;

  isNewTaskAdding: boolean = false;

  get filteredTasksById() {
    return this.tasksService.getTasksByUserId(this.selectId);
  }

  onDeleteTask(taskId: string) {
    this.tasksService.removeTask(taskId);
  }

  onStartNewTask() {
    this.isNewTaskAdding = true;
  }
  onCloseNewTask() {
    this.isNewTaskAdding = false;
  }

  onAddNewTask(newTask: NewTaskData) {
    this.tasksService.addTask(newTask, this.selectId);
    this.isNewTaskAdding = false;
  }
}
