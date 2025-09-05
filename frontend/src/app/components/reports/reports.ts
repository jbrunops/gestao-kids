import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Child {
  id: number;
  name: string;
}

interface SummaryData {
  totalStudyTime: string;
  totalFunTime: string;
  totalTime: string;
  completedActivities: number;
  studyChange: number;
  funChange: number;
  totalChange: number;
  activitiesChange: number;
}

interface WeeklyData {
  day: string;
  studyPercentage: number;
  funPercentage: number;
  totalTime: string;
}

interface TopActivity {
  name: string;
  icon: string;
  count: number;
  percentage: number;
}

interface DetailedReport {
  date: string;
  childName: string;
  activityName: string;
  type: 'study' | 'fun';
  duration: string;
  status: 'completed' | 'incomplete';
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.html',
  styleUrl: './reports.scss'
})
export class ReportsComponent implements OnInit {
  children: Child[] = [];
  selectedChild: string = '';
  selectedPeriod: string = 'week';
  dateFrom: string = '';
  dateTo: string = '';
  
  summaryData: SummaryData = {
    totalStudyTime: '4h 30m',
    totalFunTime: '2h 15m',
    totalTime: '6h 45m',
    completedActivities: 12,
    studyChange: 15,
    funChange: 8,
    totalChange: 12,
    activitiesChange: 25
  };

  weeklyData: WeeklyData[] = [
    { day: 'Seg', studyPercentage: 60, funPercentage: 40, totalTime: '2h' },
    { day: 'Ter', studyPercentage: 70, funPercentage: 30, totalTime: '1h 30m' },
    { day: 'Qua', studyPercentage: 50, funPercentage: 50, totalTime: '3h' },
    { day: 'Qui', studyPercentage: 80, funPercentage: 20, totalTime: '2h 15m' },
    { day: 'Sex', studyPercentage: 40, funPercentage: 60, totalTime: '4h' },
    { day: 'Sáb', studyPercentage: 30, funPercentage: 70, totalTime: '5h' },
    { day: 'Dom', studyPercentage: 20, funPercentage: 80, totalTime: '3h 30m' }
  ];

  topActivities: TopActivity[] = [
    { name: 'Matemática', icon: '🔢', count: 8, percentage: 100 },
    { name: 'Leitura', icon: '📖', count: 6, percentage: 75 },
    { name: 'Jogos Educativos', icon: '🎯', count: 5, percentage: 62 },
    { name: 'Desenho', icon: '🎨', count: 4, percentage: 50 },
    { name: 'Música', icon: '🎵', count: 3, percentage: 37 }
  ];

  detailedReports: DetailedReport[] = [
    { date: '2024-01-15', childName: 'Sofia', activityName: 'Matemática', type: 'study', duration: '45m', status: 'completed' },
    { date: '2024-01-15', childName: 'Sofia', activityName: 'Jogos', type: 'fun', duration: '30m', status: 'completed' },
    { date: '2024-01-14', childName: 'Lucas', activityName: 'Leitura', type: 'study', duration: '1h', status: 'completed' },
    { date: '2024-01-14', childName: 'Lucas', activityName: 'Desenho', type: 'fun', duration: '45m', status: 'incomplete' },
    { date: '2024-01-13', childName: 'Sofia', activityName: 'Música', type: 'fun', duration: '1h 15m', status: 'completed' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadChildren();
    this.setDefaultDates();
  }

  loadChildren() {
    this.children = [
      { id: 1, name: 'Sofia' },
      { id: 2, name: 'Lucas' },
      { id: 3, name: 'Ana' }
    ];
  }

  setDefaultDates() {
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    this.dateFrom = weekAgo.toISOString().split('T')[0];
    this.dateTo = today.toISOString().split('T')[0];
  }

  onChildChange() {
    console.log('Child changed:', this.selectedChild);
    this.loadReportData();
  }

  onPeriodChange() {
    console.log('Period changed:', this.selectedPeriod);
    this.loadReportData();
  }

  onDateChange() {
    console.log('Date changed:', this.dateFrom, this.dateTo);
    this.loadReportData();
  }

  loadReportData() {
    // Simular carregamento de dados baseado nos filtros
    console.log('Loading report data with filters:', {
      child: this.selectedChild,
      period: this.selectedPeriod,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    });
  }

  exportReport() {
    console.log('Exporting report...');
    // TODO: Implementar exportação de relatório
  }

  printReport() {
    console.log('Printing report...');
    window.print();
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
}
