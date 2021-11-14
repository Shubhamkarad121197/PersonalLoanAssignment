import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantDataComponent } from './component/applicant-data/applicant-data.component';
import { FormComponent } from './component/form/form.component';

const routes: Routes = [
  {path:"",redirectTo:'form',pathMatch:'full'},
  {path:"form",component:FormComponent},
  {path:"ApplicantData",component:ApplicantDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
