import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  data: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit() {
    //console.log(history.state);
    this.data = history.state;
  }
}
