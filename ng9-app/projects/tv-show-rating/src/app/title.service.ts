import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private bs = new BehaviorSubject<string>('');
  constructor() { }

  get title$() {
    return this.bs.asObservable();
  }

  update(title: string) {
    this.bs.next(title);
  }

}
