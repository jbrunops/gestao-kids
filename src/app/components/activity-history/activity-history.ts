import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Activity, ActivityHistory } from '../../models/activity.model';

@Component({
  selector: 'app-activity-history',
  imports: [CommonModule, FormsModule],
  templateUrl: './activity-history.html',
  styleUrl: './activity-history.scss'
})
export class ActivityHistoryComponent implements OnInit {
  selectedDate = '';
  activityHistory: ActivityHistory = {
    activities: [],
    totalStudyTime: '3h 15m',
    totalFunTime: '1h 45m',
    totalTime: '5h',
    dailyChange: '+10%'
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Mock data - em produção viria do serviço
    this.activityHistory.activities = [
      {
        id: 1,
        name: 'Matemática',
        type: 'study',
        duration: '1h 30m',
        startTime: '09:00',
        endTime: '10:30',
        childId: 1,
        date: '2024-01-15'
      },
      {
        id: 2,
        name: 'Leitura',
        type: 'study',
        duration: '1h',
        startTime: '11:00',
        endTime: '12:00',
        childId: 1,
        date: '2024-01-15'
      },
      {
        id: 3,
        name: 'Almoço',
        type: 'fun',
        duration: '30m',
        startTime: '12:00',
        endTime: '12:30',
        childId: 1,
        date: '2024-01-15'
      },
      {
        id: 4,
        name: 'Jogos',
        type: 'fun',
        duration: '2h',
        startTime: '14:00',
        endTime: '16:00',
        childId: 1,
        date: '2024-01-15'
      },
      {
        id: 5,
        name: 'Inglês',
        type: 'study',
        duration: '1h',
        startTime: '16:30',
        endTime: '17:30',
        childId: 1,
        date: '2024-01-15'
      }
    ];
  }

  onDateChange() {
    // TODO: Implementar busca de atividades por data
    console.log('Date changed:', this.selectedDate);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  getActivityTypeClass(type: string): string {
    return type === 'study' ? 'study-tag' : 'fun-tag';
  }

  getActivityTypeText(type: string): string {
    return type === 'study' ? 'Estudo' : 'Diversão';
  }
}
