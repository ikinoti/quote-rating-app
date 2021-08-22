import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: any;
  @Output() isBad = new EventEmitter<boolean>();

  quoteBad(bad: boolean) {
    this.isBad.emit(bad);
  }
  constructor() {}

  ngOnInit(): void {}
}
