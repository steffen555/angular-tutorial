import {Injectable} from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {StorageService} from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList: TodoItem[] = [
  {title: 'lav mad'},
  {title: 'vask bil'},
  {title: '...'},
  {title: 'profit!'},
];

@Injectable({
  providedIn: 'root'
})

export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  getTodoList() {
    return this.todoList;
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  updateItem(item: TodoItem, changes) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = {...item, ...changes};
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
}
