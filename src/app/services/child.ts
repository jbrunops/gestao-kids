import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Child, ChildProfile } from '../models/child.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(`${this.API_URL}/children`);
  }

  getChildById(id: number): Observable<Child> {
    return this.http.get<Child>(`${this.API_URL}/children/${id}`);
  }

  createChild(child: Partial<Child>): Observable<Child> {
    return this.http.post<Child>(`${this.API_URL}/children`, child);
  }

  updateChild(id: number, child: Partial<Child>): Observable<Child> {
    return this.http.put<Child>(`${this.API_URL}/children/${id}`, child);
  }

  deleteChild(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/children/${id}`);
  }

  getChildProfiles(): Observable<ChildProfile[]> {
    return this.http.get<ChildProfile[]>(`${this.API_URL}/children/profiles`);
  }

  updateChildPermissions(id: number, permissions: { allowStudy: boolean; allowFun: boolean }): Observable<Child> {
    return this.http.patch<Child>(`${this.API_URL}/children/${id}/permissions`, permissions);
  }

  getChildStats(id: number): Observable<{ studyTimeToday: string; funTimeToday: string }> {
    return this.http.get<{ studyTimeToday: string; funTimeToday: string }>(`${this.API_URL}/children/${id}/stats`);
  }
}
