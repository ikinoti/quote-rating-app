import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Believe',
      'There is no better prayer than what you believe in'
    ),
    new Quote(
      2,
      'Communication',
      'The key is communication but the lock is trust'
    ),
    new Quote(
      3,
      'Dream',
      'You have to visit your future wwith your nmind, then walk towards it in reality'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
