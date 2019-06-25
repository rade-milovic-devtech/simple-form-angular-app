import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration.component";
import { CompleteRegistrationComponent } from "./complete-registration.component";
import { UniqueEmailValidatorDirective } from "./unique-email-validator.directive";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UniqueEmailValidatorDirective,
    CompleteRegistrationComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  name: string;
  email: string;
  password: string;
}
