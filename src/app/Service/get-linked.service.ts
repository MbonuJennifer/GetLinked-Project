import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetLinkedService {
  // baseUrl = 'https://backend.getlinked.ai';
  // constructor(private http: HttpClient) {}

  // getCategories(): Observable<any> {
  //   const url = `${this.baseUrl}/hackathon/categories-list`;
  //   return this.http.get(url);
  // }
}
