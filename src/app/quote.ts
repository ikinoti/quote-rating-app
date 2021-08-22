import { stringify } from '@angular/compiler/src/util';

export class Quote {
  constructor(
    public id: number,
    public title: string,
    public quoteDesc: string
  ) {}
}
