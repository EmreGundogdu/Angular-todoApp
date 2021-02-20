import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-todoApp';
  user = 'Emre Gündoğdu';
  items = [
    { description: 'Kahvaltı', action: 'No' },
    { description: 'Sinemaya Gitmek', action: 'No' },
    { description: 'Kodlama Yapmak', action: 'No' },
    { description: 'Yüzmek', action: 'No' }
  ];
}
