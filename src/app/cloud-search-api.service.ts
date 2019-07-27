import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IResults } from './i-results';

@Injectable({
  providedIn: 'root'
})
export class CloudSearchApiService {

  constructor(private httpClient: HttpClient) { }

  search(query: string): Observable<IResults> {
    return this.httpClient.get<IResults>(`${environment.apiUrl}/results?query=${query}`);
  }
}
