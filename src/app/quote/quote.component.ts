import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, title: 'Believe' },
    { id: 2, title: 'Communication' },
    { id: 3, title: 'Dream' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
