import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UniqueEmailValidatorDirective } from './unique-email-validator.directive';

@NgModule({
  declarations: [AppComponent, UniqueEmailValidatorDirective],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  name: string;
  email: string;
  password: string;
}
