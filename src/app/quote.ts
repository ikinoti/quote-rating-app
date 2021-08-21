import { stringify } from '@angular/compiler/src/util';

export class Quote {
  id: number;
  title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
