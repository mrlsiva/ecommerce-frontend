import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Actor {
  id: number;
  name: string;
  biography: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse {
  status: string;
  data: {
    current_page: number;
    data: Actor[];
    total: number;
    per_page: number;
    next_page_url: string | null;
    prev_page_url: string | null;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getActors(page: number = 1): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/actors?page=${page}`);
  }
  
}
