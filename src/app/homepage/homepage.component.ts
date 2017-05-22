import { Component, OnInit } from '@angular/core';
import { FastinfoService } from '../fastinfo.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Days } from '../days.model';
import { Day } from '../day.model';
declare var $:any;

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

  showFirstVideo(item) {
    $("#player").attr("src","https://www.youtube.com/embed/jSF6oE8Y3fk");
    $(".currentVid").removeClass("currentVid");
    $(".homepage__youtube__videosBox__video:nth-of-type(1)").addClass("currentVid");
  }
  showSecondVideo(item) {
    $("#player").attr("src","https://www.youtube.com/embed/IgDHQ93H7KI");
    $(".currentVid").removeClass("currentVid");
    $(".homepage__youtube__videosBox__video:nth-of-type(2)").addClass("currentVid");
  }
  showThirdVideo(item) {
    $("#player").attr("src","https://www.youtube.com/embed/Rh7uGdyLMmQ");
    $(".currentVid").removeClass("currentVid");
    $(".homepage__youtube__videosBox__video:nth-of-type(3)").addClass("currentVid");
  }
  showFourthVideo(item) {
    $("#player").attr("src","https://www.youtube.com/embed/mJ_LN9BC2Ng");
    $(".currentVid").removeClass("currentVid");
    $(".homepage__youtube__videosBox__video:nth-of-type(4)").addClass("currentVid");
  }
  showFifthVideo(item) {
    $("#player").attr("src","https://www.youtube.com/embed/yTSH3euFKVE");
    $(".currentVid").removeClass("currentVid");
    $(".homepage__youtube__videosBox__video:nth-of-type(5)").addClass("currentVid");
  }
  showSixthVideo(item) {
    $("#player").attr("src","https://www.youtube.com/embed/tI6GRY20Tp4?list=PLM5wn1MwyZJkkPTvmvjlM2Jj1CLUUxfRg");
    $(".currentVid").removeClass("currentVid");
    $(".homepage__youtube__videosBox__video:nth-of-type(6)").addClass("currentVid");
  }

}
