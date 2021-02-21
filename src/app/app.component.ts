import { Component } from '@angular/core';
import { Model, todoItem } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-todoApp';
  model = new Model();
  isDisplay = false;

  getName() {
    return this.model.user;
  }
  getItems() {
    if (this.isDisplay) {
      return this.model.items
    }
    return this.model.items.filter((item) => !item.action);
  }
  addItem(value: string) {
    if (value != '') {
      this.model.items.push(new todoItem(value, false));
    }
  }
}
