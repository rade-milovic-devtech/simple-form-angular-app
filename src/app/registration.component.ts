import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "registration",
  templateUrl: "./registration.component.html"
})
export class RegistrationComponent {
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigateByUrl("/registration-complete");
  }
}
