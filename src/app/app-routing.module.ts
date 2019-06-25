import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegistrationComponent } from "./registration.component";
import { CompleteRegistrationComponent } from "./complete-registration.component";

const routes: Routes = [
  { path: "registration", component: RegistrationComponent },
  { path: "registration-complete", component: CompleteRegistrationComponent },
  { path: "", redirectTo: "/registration", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
