import { TaskStatus } from "../types/tasks.type";

export class UpdateTasksDto{
    title?:string;
    status?: TaskStatus;
}