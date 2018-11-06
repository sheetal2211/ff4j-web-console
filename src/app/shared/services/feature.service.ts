import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Feature} from '../models/Feature';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiBaseUrl ? environment.apiBaseUrl : '';
  }

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.baseUrl + '/ff4j/store/features');
  }
}
