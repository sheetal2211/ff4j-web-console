import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Feature} from '../models/Feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http: HttpClient) {
  }

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>('/ff4j/store/features');
  }
}
