import { Days } from './days.model';
import { Day } from './day.model';


export class Section {
  constructor(public days: Days[], public subtitle: string, public title: string) { }
}
