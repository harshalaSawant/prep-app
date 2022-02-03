import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.scss']
})
export class ChildDataComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('ChildData comp');
    this.route.data.subscribe(data => {console.log('resolved data', data)});
    // .subscribe(params => {
    //   console.log(params);
    // })
  }

}
