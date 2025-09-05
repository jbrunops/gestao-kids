import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivityType } from '../../models/activity.model';

@Component({
  selector: 'app-child-dashboard',
  imports: [CommonModule],
  templateUrl: './child-dashboard.html',
  styleUrl: './child-dashboard.scss'
})
export class ChildDashboardComponent implements OnInit {
  childName = 'Sofia';
  activities: ActivityType[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Mock data - em produção viria do serviço
    this.activities = [
      {
        id: 'reading',
        name: 'Leitura',
        icon: '📚',
        duration: '30 minutos'
      },
      {
        id: 'drawing',
        name: 'Desenho',
        icon: '✏️',
        duration: '45 minutos'
      },
      {
        id: 'outdoor',
        name: 'Brincadeira ao ar livre',
        icon: '☀️',
        duration: '1 hora'
      }
    ];
  }

  startActivity() {
    // TODO: Implementar lógica para iniciar atividade
    console.log('Starting activity...');
    this.router.navigate(['/profile-selector']);
  }

  logout() {
    // TODO: Implementar logout
    this.router.navigate(['/login']);
  }
}
