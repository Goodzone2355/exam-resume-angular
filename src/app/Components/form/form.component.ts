import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  public data = { name: '', surname: '', job: '' };
  getName(val: string) {
    this.data.name = val;
  }

  getSurname(val: string) {
    this.data.surname = val;
  }

  getJob(val: string) {
    this.data.job = val;
  }

  constructor(private router: Router) {}
  gotoResume() {
    this.router.navigateByUrl('/resume', { state: this.data });
  }
}
