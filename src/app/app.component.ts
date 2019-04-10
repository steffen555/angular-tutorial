import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
    <app-input-button-unit></app-input-button-unit>
    <ul>
      <li *ngFor="let todoItem of todoList">
        {{ todoItem.title }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  todoList = [
    {title: 'install NodeJS'},
    {title: 'lav mad'},
    {title: 'hop i sengen'},
    {title: 'gå på wc'}
  ];
}
