import { Injectable, NotFoundException } from '@nestjs/common';
import { ITask } from './types/tasks.type';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';

@Injectable()
export class TasksService {
  private readonly tasks: ITask[] = [];
  private nextId = 1;

  create(createTaskDto: CreateTaskDto) {
    const task: ITask = {
      id: this.nextId++,
      title: createTaskDto.title,
      status: 'todo',
    };

    this.tasks.push(task);

    return task;
  }

  findAll(): ITask[] {
    return this.tasks;
  }

  findOne(id: number): ITask {
    const task = this.tasks.find((t) => t.id === id);

    if (!task) throw new NotFoundException('Task not found');

    return task;
  }

  update(id: number, updateTasksDto: UpdateTasksDto) {
    const task = this.tasks.find((t) => t.id === id);

    if (!task) throw new NotFoundException('No task found');

    if (updateTasksDto.title) task.title = updateTasksDto.title;

    if (updateTasksDto.status) task.status = updateTasksDto.status;

    return task;
  }

  delete(id: number) {
    const task = this.tasks.find((t) => t.id);

    if (!task) throw new NotFoundException('No task found');

    const index = this.tasks.findIndex((t) => t.id === id);
    this.tasks.splice(index, 1);
    return task;
  }
}
