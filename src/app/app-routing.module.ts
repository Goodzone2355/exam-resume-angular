import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Components/form/form.component';
import { ResumeComponent } from './Components/resume/resume.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'resume', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
