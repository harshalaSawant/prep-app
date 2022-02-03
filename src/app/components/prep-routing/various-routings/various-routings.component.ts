import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentDropDownIF, StudentDropDownIF } from 'src/app/interfaces/api-res-interface';
import { InjectableService } from 'src/app/services/app-level-injectable.service';
import { StudentDataService } from 'src/app/services/student-data.service';

@Component({
  selector: 'app-various-routings',
  templateUrl: './various-routings.component.html',
  styleUrls: ['./various-routings.component.scss']
})
export class VariousRoutingsComponent implements OnInit {
  components: ComponentDropDownIF[] = [];
  selectedComp: ComponentDropDownIF = { name: '', route: ''};
  name = '';
  inputMsgToA = '';
  studentInputToA: {name: 'Student1', id: 1};
  fromattedMsgFromA: any;

  // FOr resolver
  students: StudentDropDownIF[] = [];
  selectedStudent: StudentDropDownIF = { name: '', id: 1 };

  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private injectableSer: InjectableService,
    private studentService: StudentDataService) { }

  ngOnInit(): void {
    this.studentInputToA= {name: 'Student1', id: 1};
    this.getComponentList();
    this.getStudentsList();
  }
  getStudentsList() {
    this.studentService.getData().subscribe(data => {
      this.students = data['default'];
      console.log('student data from service', this.students)
    });
  }
  routeToStudentDetail(student) {
    this.router.navigate(['/routing/childData', student.id]);
  }
  getComponentList() {
    this.injectableSer.getComponents().subscribe((data: any) => {
      if (data) {
        this.components = data;
      }
    });
  }
  displayMsgFromA(event: any) {
    this.fromattedMsgFromA = event.formattedMsg;
  }
  routeToOtherComp(name: string) {
    this.router.navigate([name]);
  }
  loadadmin() {
    this.router.navigate(['admin']);
  }

  navigateToChild(compName) {
    this.router.navigate([compName], {relativeTo: this.route});
  }
}
