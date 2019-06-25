import { Component, OnInit } from "@angular/core";

import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Component({
  selector: "complete-registration",
  templateUrl: "./complete-registration.component.html"
})
export class CompleteRegistrationComponent implements OnInit {
  isDone: boolean = false;

  ngOnInit(): void {
    of(true)
      .pipe(delay(this.getRandomDelayBetween(3000, 5000)))
      .subscribe(() => (this.isDone = true));
  }

  private getRandomDelayBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
