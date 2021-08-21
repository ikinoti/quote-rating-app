import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {
      id: 1,
      title: 'Believe',
      quoteDesc: 'There is no better prayer than what you believe in',
    },
    {
      id: 2,
      title: 'Communication',
      quoteDesc: 'The key is communication but the lock is trust',
    },
    {
      id: 3,
      title: 'Dream',
      quoteDesc:
        'You have to visit your future wwith your nmind, then walk towards it in reality',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
