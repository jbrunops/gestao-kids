import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity, ActivityHistory, ActivityType } from '../models/activity.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.API_URL}/activities`);
  }

  getActivitiesByChild(childId: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.API_URL}/activities/child/${childId}`);
  }

  getActivitiesByDateRange(childId: number, startDate: string, endDate: string): Observable<Activity[]> {
    const params = new HttpParams()
      .set('childId', childId.toString())
      .set('startDate', startDate)
      .set('endDate', endDate);
    
    return this.http.get<Activity[]>(`${this.API_URL}/activities/range`, { params });
  }

  createActivity(activity: Partial<Activity>): Observable<Activity> {
    return this.http.post<Activity>(`${this.API_URL}/activities`, activity);
  }

  updateActivity(id: number, activity: Partial<Activity>): Observable<Activity> {
    return this.http.put<Activity>(`${this.API_URL}/activities/${id}`, activity);
  }

  deleteActivity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/activities/${id}`);
  }

  startActivity(activity: Partial<Activity>): Observable<Activity> {
    return this.http.post<Activity>(`${this.API_URL}/activities/start`, activity);
  }

  endActivity(id: number): Observable<Activity> {
    return this.http.post<Activity>(`${this.API_URL}/activities/${id}/end`, {});
  }

  getActivityHistory(childId: number, date?: string): Observable<ActivityHistory> {
    const params = date ? new HttpParams().set('date', date) : new HttpParams();
    return this.http.get<ActivityHistory>(`${this.API_URL}/activities/history/${childId}`, { params });
  }

  getActivityTypes(): Observable<ActivityType[]> {
    return this.http.get<ActivityType[]>(`${this.API_URL}/activities/types`);
  }

  getTodayStats(childId: number): Observable<{ studyTime: string; funTime: string; totalTime: string }> {
    return this.http.get<{ studyTime: string; funTime: string; totalTime: string }>(`${this.API_URL}/activities/stats/today/${childId}`);
  }

  getWeeklyStats(childId: number): Observable<{ studyTime: string; funTime: string; totalTime: string }> {
    return this.http.get<{ studyTime: string; funTime: string; totalTime: string }>(`${this.API_URL}/activities/stats/weekly/${childId}`);
  }
}
