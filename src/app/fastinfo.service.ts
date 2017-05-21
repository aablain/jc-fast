import { Injectable } from '@angular/core';
import { Jcfast } from './jcfast.model';
import { Section } from './section.model';
import { Days } from './days.model';
import { Day } from './day.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FastinfoService {
  jcfast: FirebaseListObservable<any[]>;
  day: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.jcfast = database.list('jcfast');
  }

  getJcfast(){
    return this.jcfast;
  }

  grabDayById(findThisDay: string) {
    console.log(findThisDay);
    return this.database.object('jcfast/' + findThisDay);
  }

}
