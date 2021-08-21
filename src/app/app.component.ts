import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quotes: Quote[] = [
    { id: 1, title: 'Believe' },
    { id: 2, title: 'Communication' },
    { id: 3, title: 'Dream' },
  ];
}
