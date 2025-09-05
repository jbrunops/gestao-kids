import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Child } from '../../models/child.model';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent implements OnInit {
  children: Child[] = [];

  constructor(private router: Router) {
    // Inicialização do componente dashboard principal
  }

  ngOnInit() {
    // Dados mockados para demonstração - em produção viria do serviço
    // TODO: Implementar chamada para API quando o backend estiver pronto
    this.children = [
      {
        id: 1,
        name: 'Sofia',
        age: 8,
        avatar: 'assets/avatars/sofia.svg',
        allowStudy: true,
        allowFun: true,
        studyTimeToday: '2h 30m',
        funTimeToday: '1h 15m'
      },
      {
        id: 2,
        name: 'Lucas',
        age: 10,
        avatar: 'assets/avatars/lucas.svg',
        allowStudy: true,
        allowFun: true,
        studyTimeToday: '3h 45m',
        funTimeToday: '2h 00m'
      },
      {
        id: 3,
        name: 'Isabela',
        age: 6,
        avatar: 'assets/avatars/isabela.svg',
        allowStudy: true,
        allowFun: true,
        studyTimeToday: '1h 45m',
        funTimeToday: '45m'
      }
    ];
  }

  addChild() {
    // Navegação para tela de adicionar criança
    this.router.navigate(['/add-child']);
  }

  viewReport(childId: number) {
    this.router.navigate(['/activity-history'], { queryParams: { childId } });
  }

  deleteChild(childId: number) {
    if (confirm('Tem certeza que deseja excluir este perfil?')) {
      this.children = this.children.filter(child => child.id !== childId);
    }
  }

  logout() {
    // TODO: Implementar logout
    this.router.navigate(['/login']);
  }

  getAvatarColor(childId: number): string {
    // Função para gerar cores diferentes para cada avatar
    // Usa módulo para garantir que sempre tenha uma cor válida
    const colors = ['#FF69B4', '#4169E1', '#32CD32', '#FFD700', '#FF6347'];
    return colors[childId % colors.length];
  }
}
