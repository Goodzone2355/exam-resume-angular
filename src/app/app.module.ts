import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './Components/form/form.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [AppComponent, FormComponent, ResumeComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
