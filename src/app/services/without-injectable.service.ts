import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import * as DummyData from '../../assets/json-data/success-dummy.json';

export class WithoutInJectableService {
  constructor(private http: HttpClient) {}

  getDetails() {
    // return this.http.get('../../assets/json-data/success-dummy.json');
    return of(DummyData);
  }
}