import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { ComponentDropDownIF, StudentDropDownIF } from 'src/app/interfaces/api-res-interface';
import { InjectableService } from 'src/app/services/app-level-injectable.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StudentDataService } from 'src/app/services/student-data.service';

@Component({
  selector: 'app-prep-routing',
  templateUrl: './prep-routing.component.html',
  styleUrls: ['./prep-routing.component.scss']
})
export class PrepRoutingComponent implements OnInit {
  

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.router.navigate(['variousRoutings'], {relativeTo: this.route});
  }
  handleChange(e) {
    let index = e.index;
    let link;
    switch (index) {
        case 0:
            link = ['/variousRoutings'];
            break;
        case 1:
            link = ['/lazyLoadingRoutes'];
            break;
    }
    this.router.navigate(link);
}
}

