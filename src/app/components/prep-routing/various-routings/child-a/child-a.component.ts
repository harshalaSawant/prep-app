import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit, OnChanges, DoCheck {
  obs$: Observable<any>;
  @Input('student') student = {name: '', id: 0};
  @Input('data') data = '';
  oldname = this.student.name;
  nameChanged = false;
  // @Output() outputFromA: EventEmitter<any> = new EventEmitter();
  // @ViewChild('dispMessage') dispMessage: any;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonchanges of child a', changes);
  }
  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.oldname !== this.student.name) {
      console.log('oldname, newname', this.oldname, this.student.name);
      this.nameChanged = true;
      this.oldname = this.student.name;
      this.nameChanged = false;
    }
  }

  // sendFormattedMsg() {
  //   console.log(this.dispMessage);
  //   this.outputFromA.emit({formattedMsg: this.data.toUpperCase()});
  // }
}
