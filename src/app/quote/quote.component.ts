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
      'There is no better prayer than what you believe in',
      0,
      0,
      false
    ),
    new Quote(
      2,
      'Communication',
      'The key is communication but the lock is trust',
      0,
      0,
      false
    ),
    new Quote(
      3,
      'Dream',
      'You have to visit your future wwith your nmind, then walk towards it in reality',
      0,
      0,
      false
    ),
  ];
  badQuote(isBad: any, index: any) {
    if (isBad) {
      if (isBad) {
        let toDel = confirm(
          `Are you sure you want to delete ${this.quotes[index].title}?`
        );
        if (toDel) {
          this.quotes.splice(index, 1);
        }
      }
    }
  }

  // toLike(like: boolean, index: any) {
  //   if (like) {
  //     this.quotes[index].upvotes += 1;
  //     this.getHighest();
  //   } else {
  //     this.quotes[index].downvotes += 1;
  //   }
  // }
  // getHighest() {
  //   let highest = 0;
  //   let highVotedQuote: Quote;
  //   for (let quote of this.quotes) {
  //     if (quote.upvotes > highest) {
  //       highest = quote.upvotes;
  //       highVotedQuote = quote;
  //     }
  //     if (quote.id === highVotedQuote.id) {
  //       quote.highest = true;
  //     } else {
  //       quote.highest = false;
  //     }
  //   }
  // }

  constructor() {}

  ngOnInit(): void {}
}
