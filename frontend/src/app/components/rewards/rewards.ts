import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Child {
  id: number;
  name: string;
  points: number;
  goal: number;
}

interface Reward {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: 'study' | 'behavior' | 'chores' | 'special';
  status: 'available' | 'earned' | 'redeemed';
  pointsRequired: number;
  maxUses: number;
  currentUses: number;
  childId?: number;
  earnedAt?: string;
  redeemedAt?: string;
}

@Component({
  selector: 'app-rewards',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './rewards.html',
  styleUrl: './rewards.scss'
})
export class RewardsComponent implements OnInit {
  children: Child[] = [];
  rewards: Reward[] = [];
  filteredRewards: Reward[] = [];
  
  selectedChild: string = '';
  selectedStatus: string = '';
  selectedCategory: string = '';
  
  showModal: boolean = false;
  isEditing: boolean = false;
  editingReward: Reward | null = null;
  
  rewardForm: FormGroup;
  
  totalPoints: number = 0;
  earnedRewards: number = 0;
  availableRewards: number = 0;
  redeemedRewards: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.rewardForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      icon: ['🎁', [Validators.required]],
      category: ['study', [Validators.required]],
      pointsRequired: [100, [Validators.required, Validators.min(10), Validators.max(1000)]],
      maxUses: [1, [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  ngOnInit() {
    this.loadChildren();
    this.loadRewards();
    this.updateStats();
  }

  loadChildren() {
    this.children = [
      { id: 1, name: 'Sofia', points: 250, goal: 500 },
      { id: 2, name: 'Lucas', points: 180, goal: 400 },
      { id: 3, name: 'Ana', points: 320, goal: 600 }
    ];
    
    this.totalPoints = this.children.reduce((sum, child) => sum + child.points, 0);
  }

  loadRewards() {
    this.rewards = [
      {
        id: 1,
        title: 'Pizza no final de semana',
        description: 'Escolher o sabor da pizza para o jantar de sábado',
        icon: '🍕',
        category: 'study',
        status: 'available',
        pointsRequired: 200,
        maxUses: 1,
        currentUses: 0
      },
      {
        id: 2,
        title: '1 hora extra de videogame',
        description: 'Jogar videogame por 1 hora a mais no domingo',
        icon: '🎮',
        category: 'behavior',
        status: 'earned',
        pointsRequired: 150,
        maxUses: 2,
        currentUses: 1,
        childId: 1,
        earnedAt: '2024-01-15'
      },
      {
        id: 3,
        title: 'Livro novo',
        description: 'Escolher um livro novo na livraria',
        icon: '📚',
        category: 'study',
        status: 'redeemed',
        pointsRequired: 300,
        maxUses: 1,
        currentUses: 1,
        childId: 2,
        earnedAt: '2024-01-10',
        redeemedAt: '2024-01-12'
      },
      {
        id: 4,
        title: 'Cinema com a família',
        description: 'Ir ao cinema assistir um filme escolhido por você',
        icon: '🎬',
        category: 'special',
        status: 'available',
        pointsRequired: 400,
        maxUses: 1,
        currentUses: 0
      },
      {
        id: 5,
        title: 'Sorvete no parque',
        description: 'Tomar sorvete no parque da cidade',
        icon: '🍦',
        category: 'chores',
        status: 'available',
        pointsRequired: 100,
        maxUses: 3,
        currentUses: 0
      },
      {
        id: 6,
        title: 'R$ 10,00 de mesada extra',
        description: 'Receber R$ 10,00 a mais na mesada deste mês',
        icon: '💰',
        category: 'special',
        status: 'available',
        pointsRequired: 500,
        maxUses: 1,
        currentUses: 0
      }
    ];
    
    this.filteredRewards = [...this.rewards];
  }

  updateStats() {
    this.earnedRewards = this.rewards.filter(r => r.status === 'earned').length;
    this.availableRewards = this.rewards.filter(r => r.status === 'available').length;
    this.redeemedRewards = this.rewards.filter(r => r.status === 'redeemed').length;
  }

  onChildFilterChange() {
    this.applyFilters();
  }

  onStatusFilterChange() {
    this.applyFilters();
  }

  onCategoryFilterChange() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredRewards = this.rewards.filter(reward => {
      const childMatch = !this.selectedChild || reward.childId?.toString() === this.selectedChild;
      const statusMatch = !this.selectedStatus || reward.status === this.selectedStatus;
      const categoryMatch = !this.selectedCategory || reward.category === this.selectedCategory;
      
      return childMatch && statusMatch && categoryMatch;
    });
  }

  openAddRewardModal() {
    this.isEditing = false;
    this.editingReward = null;
    this.rewardForm.reset({
      icon: '🎁',
      category: 'study',
      pointsRequired: 100,
      maxUses: 1
    });
    this.showModal = true;
  }

  editReward(reward: Reward) {
    this.isEditing = true;
    this.editingReward = reward;
    this.rewardForm.patchValue({
      title: reward.title,
      description: reward.description,
      icon: reward.icon,
      category: reward.category,
      pointsRequired: reward.pointsRequired,
      maxUses: reward.maxUses
    });
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.isEditing = false;
    this.editingReward = null;
    this.rewardForm.reset();
  }

  onSubmit() {
    if (this.rewardForm.valid) {
      const formValue = this.rewardForm.value;
      
      if (this.isEditing && this.editingReward) {
        // Editar recompensa existente
        const index = this.rewards.findIndex(r => r.id === this.editingReward!.id);
        if (index !== -1) {
          this.rewards[index] = {
            ...this.rewards[index],
            ...formValue,
            currentUses: this.rewards[index].currentUses
          };
        }
      } else {
        // Criar nova recompensa
        const newReward: Reward = {
          id: Math.max(...this.rewards.map(r => r.id)) + 1,
          ...formValue,
          status: 'available',
          currentUses: 0
        };
        this.rewards.push(newReward);
      }
      
      this.updateStats();
      this.applyFilters();
      this.closeModal();
    }
  }

  earnReward(reward: Reward) {
    if (this.canAfford(reward)) {
      const index = this.rewards.findIndex(r => r.id === reward.id);
      if (index !== -1) {
        this.rewards[index].status = 'earned';
        this.rewards[index].childId = parseInt(this.selectedChild) || 1;
        this.rewards[index].earnedAt = new Date().toISOString().split('T')[0];
        this.rewards[index].currentUses++;
        
        // Deduzir pontos da criança
        const childIndex = this.children.findIndex(c => c.id === this.rewards[index].childId);
        if (childIndex !== -1) {
          this.children[childIndex].points -= reward.pointsRequired;
          this.totalPoints -= reward.pointsRequired;
        }
        
        this.updateStats();
        this.applyFilters();
      }
    }
  }

  redeemReward(reward: Reward) {
    const index = this.rewards.findIndex(r => r.id === reward.id);
    if (index !== -1) {
      this.rewards[index].status = 'redeemed';
      this.rewards[index].redeemedAt = new Date().toISOString().split('T')[0];
      
      this.updateStats();
      this.applyFilters();
    }
  }

  canAfford(reward: Reward): boolean {
    if (!this.selectedChild) return false;
    const child = this.children.find(c => c.id === parseInt(this.selectedChild));
    return child ? child.points >= reward.pointsRequired : false;
  }

  getChildPoints(childId: number): number {
    const child = this.children.find(c => c.id === childId);
    return child ? child.points : 0;
  }

  getChildProgress(childId: number): number {
    const child = this.children.find(c => c.id === childId);
    if (!child) return 0;
    return Math.min((child.points / child.goal) * 100, 100);
  }

  getAvatarColor(childId: number): string {
    const colors = ['#FF69B4', '#4169E1', '#32CD32', '#FFD700', '#FF6347'];
    return colors[childId % colors.length];
  }

  getCategoryText(category: string): string {
    const categories = {
      'study': 'Estudo',
      'behavior': 'Comportamento',
      'chores': 'Tarefas',
      'special': 'Especial'
    };
    return categories[category as keyof typeof categories] || category;
  }

  getStatusText(status: string): string {
    const statuses = {
      'available': 'Disponível',
      'earned': 'Conquistada',
      'redeemed': 'Resgatada'
    };
    return statuses[status as keyof typeof statuses] || status;
  }

  getRewardCardClass(reward: Reward): string {
    return `reward-card-${reward.status}`;
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToReports() {
    this.router.navigate(['/reports']);
  }

  goToTasks() {
    this.router.navigate(['/tasks']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
}
