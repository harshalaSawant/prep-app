import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class InjectableService {
  compList = [];
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('../assets/json-data/success-injectable-dummy.json');
  }
  getComponents() {
     this.http.get('../assets/json-data/components.json').toPromise().then(res => {
      this.compList = res[0];
      console.log(this.compList)
     });
     
     
    return this.http.get('../assets/json-data/components.json');
  }
  getComp(id: string) {
    return this.compList.find(x => x.name === id) || {};
  }
}