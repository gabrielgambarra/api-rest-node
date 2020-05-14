import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {

  isProgress = new Subject<boolean>();

  show() {
    setTimeout(() => {
      this.isProgress.next(true);
    }, 0);
  }

  hide() {
    setTimeout(() => {
      this.isProgress.next(false);
    }, 0);
  }
}
