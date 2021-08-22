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
      'Prop',
      'Tosh',
      new Date(),
      0,
      0,
      0,
      false
    ),
    new Quote(
      2,
      'Communication',
      'The key is communication but the lock is trust',
      '3 wise men',
      'Kakai',
      new Date(),
      0,
      0,
      0,
      false
    ),
    new Quote(
      3,
      'Dream',
      'You have to visit your future wwith your nmind, then walk towards it in reality',
      'Wahenga',
      'Manduku',
      new Date(),
      0,
      0,
      0,
      false
    ),
  ];

  get quoteFunction() {
    return this.genQuote.bind(this);
  }

  getQuote(author: string, title: string, quoteDesc: string, creater: string) {
    let number = this.quotes.length + 1;
    let date = new Date();
    this.quotes.push(
      new Quote(number, title, quoteDesc, author, creater, date, 0, 0, 0, false)
    );
  }
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

  toLike(like: boolean, index: any) {
    if (like) {
      this.quotes[index].upvotes += 1;
      this.getHighest();
    } else {
      this.quotes[index].downvotes += 1;
    }
  }
  getHighest() {
    let highest = 0;
    let highVotedQuote: Quote;
    for (let quote of this.quotes) {
      if (quote.upvotes > highest) {
        highest = quote.upvotes;
        highVotedQuote = quote;
      }
      if (quote.id === highVotedQuote.id) {
        quote.highest = true;
      } else {
        quote.highest = false;
      }
    }
  }

  constructor() {
    for (let quote of this.quotes) {
      var time = function () {
        let today: any;
        setInterval(() => {
          (today = new Date()).getTime();
        }, 1000);
        setInterval(() => {
          dateDiffSeconds();
        }, 1000);
        var dateDiffSeconds = function () {
          var timeDiff: number = (today - quote.dateCreated.getTime()) / 1000;
          quote.age = timeDiff;
        };
      };
      time();
    }
  }

  ngOnInit(): void {}
}
