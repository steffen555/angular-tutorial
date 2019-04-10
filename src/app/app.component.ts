import {Component} from '@angular/core';
import {TodoItem} from "./interfaces/todo-item";

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem"></app-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'lav mad'},
    {title: 'vask bil'},
    {title: 'gå på wc'}
  ];

  addItem(title: string) {
    this.todoList.push({title});
  }
}
