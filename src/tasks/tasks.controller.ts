import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { ITask } from './types/tasks.type';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll(): ITask[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): ITask {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): ITask {
    return this.tasksService.create(createTaskDto);
  }

  @Put()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTasksDto,
  ): ITask {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete()
  delete(@Param('id', ParseIntPipe) id: number): ITask {
    return this.tasksService.delete(id);
  }
}
