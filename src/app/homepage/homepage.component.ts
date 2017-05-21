import { Component, OnInit } from '@angular/core';
import { FastinfoService } from '../fastinfo.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Days } from '../days.model';
import { Day } from '../day.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [FastinfoService]
})
export class HomepageComponent implements OnInit {
  jcfast: FirebaseListObservable<any[]>;
  days1: FirebaseListObservable<any[]>;

  constructor(private router: Router, private fastinfoService: FastinfoService) { }

  ngOnInit() {
    this.jcfast = this.fastinfoService.getJcfast();
  }

  goToDayDetailsPage(clickedDay: Day) {
    this.router.navigate(["day" + clickedDay.dayid]);
    console.log(clickedDay.dayid);
  }

}
