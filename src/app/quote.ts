import { stringify } from '@angular/compiler/src/util';

export class Quote {
  id: number;
  title: string;
  quoteDesc: string;

  constructor(id: number, title: string, quoteDesc: string) {
    this.id = id;
    this.title = title;
    this.quoteDesc = quoteDesc;
  }
}
