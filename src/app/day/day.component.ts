import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FastinfoService } from '../fastinfo.service';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Day } from '../day.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  providers: [FastinfoService]
})
export class DayComponent implements OnInit {
  dayId: number;
  dayToDisplay: FirebaseObjectObservable<any[]>;
  jcfast: FirebaseListObservable<any[]>;

  constructor(private route: ActivatedRoute, private location: Location, private fastinfoService: FastinfoService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.dayId = parseInt(urlParametersArray['dayid'].replace(/\D+/g, ''));
      console.log(this.dayId);
    });
    if (this.dayId < 11) {
      console.log((this.dayId - 1))
      this.dayToDisplay = this.fastinfoService.grabDayById(("section4/days/" + (this.dayId - 1)));
    } else if (this.dayId > 10 && this.dayId < 21) {
      console.log((this.dayId - 11));
      this.dayToDisplay = this.fastinfoService.grabDayById(("section4/days/" + (this.dayId - 11)));
    } else if (this.dayId > 20 && this.dayId < 31) {
      console.log((this.dayId - 21));
      this.dayToDisplay = this.fastinfoService.grabDayById(("section4/days/" + (this.dayId - 21)));
    } else if (this.dayId > 30) {
      console.log((this.dayId - 31));
      this.dayToDisplay = this.fastinfoService.grabDayById(("section4/days/" + (this.dayId - 31)));
    }
    console.log(this.dayToDisplay);
  }


}
