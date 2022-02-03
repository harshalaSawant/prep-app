import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { StudentDataService } from "./student-data.service";

@Injectable({
  'providedIn': 'root'
})
export class DataResolverService implements Resolve<any> {
  constructor(private studentService: StudentDataService) {}

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('data resolver service',this.studentService.getStudent(route.paramMap.get('id')))
    return this.studentService.getStudent(route.paramMap.get('id'));
  }
}