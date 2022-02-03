import { Injectable } from "@angular/core";
import { of } from "rxjs";

import * as Students from '../../assets/json-data/student-data.json';

@Injectable({
  'providedIn': 'root'
})
export class StudentDataService {
  constructor() {}
  allstudents = [];

  getData() {
    console.log('student.getData()');
    this.allstudents = JSON.parse(JSON.stringify(Students['default']));
    return of(Students);
  }
  getStudent(id) {
    console.log('student.getStudent()');
    return this.allstudents.find(x => x.id === +id);
  }

}