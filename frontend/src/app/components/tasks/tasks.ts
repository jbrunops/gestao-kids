import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Child {
  id: number;
  name: string;
}

interface Task {
  id: number;
  title: string;
  description: string;
  childId: number;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in_progress' | 'completed' | 'overdue';
  dueDate: string;
  createdAt: string;
  estimatedTime: number;
  progress: number;
}

interface TaskStats {
  pending: number;
  inProgress: number;
  completed: number;
  overdue: number;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class TasksComponent implements OnInit {
  children: Child[] = [];
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  
  selectedChild: string = '';
  selectedStatus: string = '';
  selectedPriority: string = '';
  
  showModal: boolean = false;
  isEditing: boolean = false;
  editingTask: Task | null = null;
  
  taskForm: FormGroup;
  taskStats: TaskStats = {
    pending: 0,
    inProgress: 0,
    completed: 0,
    overdue: 0
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      childId: ['', [Validators.required]],
      priority: ['medium', [Validators.required]],
      dueDate: ['', [Validators.required]],
      estimatedTime: [30, [Validators.required, Validators.min(5), Validators.max(300)]]
    });
  }

  ngOnInit() {
    this.loadChildren();
    this.loadTasks();
    this.updateStats();
  }

  loadChildren() {
    this.children = [
      { id: 1, name: 'Sofia' },
      { id: 2, name: 'Lucas' },
      { id: 3, name: 'Ana' }
    ];
  }

  loadTasks() {
    this.tasks = [
      {
        id: 1,
        title: 'Fazer exercícios de matemática',
        description: 'Resolver 20 exercícios de multiplicação da página 45 do livro',
        childId: 1,
        priority: 'high',
        status: 'pending',
        dueDate: '2024-01-20',
        createdAt: '2024-01-15',
        estimatedTime: 45,
        progress: 0
      },
      {
        id: 2,
        title: 'Ler capítulo 3 do livro',
        description: 'Ler e fazer resumo do capítulo 3 sobre história do Brasil',
        childId: 2,
        priority: 'medium',
        status: 'in_progress',
        dueDate: '2024-01-18',
        createdAt: '2024-01-14',
        estimatedTime: 60,
        progress: 65
      },
      {
        id: 3,
        title: 'Desenhar paisagem',
        description: 'Criar um desenho de uma paisagem com montanhas e rio',
        childId: 1,
        priority: 'low',
        status: 'completed',
        dueDate: '2024-01-16',
        createdAt: '2024-01-13',
        estimatedTime: 30,
        progress: 100
      },
      {
        id: 4,
        title: 'Estudar para prova de ciências',
        description: 'Revisar capítulos 1, 2 e 3 sobre sistema solar',
        childId: 3,
        priority: 'high',
        status: 'overdue',
        dueDate: '2024-01-12',
        createdAt: '2024-01-10',
        estimatedTime: 90,
        progress: 30
      }
    ];
    
    this.filteredTasks = [...this.tasks];
  }

  updateStats() {
    this.taskStats = {
      pending: this.tasks.filter(t => t.status === 'pending').length,
      inProgress: this.tasks.filter(t => t.status === 'in_progress').length,
      completed: this.tasks.filter(t => t.status === 'completed').length,
      overdue: this.tasks.filter(t => t.status === 'overdue').length
    };
  }

  onChildFilterChange() {
    this.applyFilters();
  }

  onStatusFilterChange() {
    this.applyFilters();
  }

  onPriorityFilterChange() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredTasks = this.tasks.filter(task => {
      const childMatch = !this.selectedChild || task.childId.toString() === this.selectedChild;
      const statusMatch = !this.selectedStatus || task.status === this.selectedStatus;
      const priorityMatch = !this.selectedPriority || task.priority === this.selectedPriority;
      
      return childMatch && statusMatch && priorityMatch;
    });
  }

  openAddTaskModal() {
    this.isEditing = false;
    this.editingTask = null;
    this.taskForm.reset({
      priority: 'medium',
      estimatedTime: 30
    });
    this.showModal = true;
  }

  editTask(task: Task) {
    this.isEditing = true;
    this.editingTask = task;
    this.taskForm.patchValue({
      title: task.title,
      description: task.description,
      childId: task.childId,
      priority: task.priority,
      dueDate: task.dueDate,
      estimatedTime: task.estimatedTime
    });
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.isEditing = false;
    this.editingTask = null;
    this.taskForm.reset();
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;
      
      if (this.isEditing && this.editingTask) {
        // Editar tarefa existente
        const index = this.tasks.findIndex(t => t.id === this.editingTask!.id);
        if (index !== -1) {
          this.tasks[index] = {
            ...this.tasks[index],
            ...formValue,
            createdAt: this.tasks[index].createdAt
          };
        }
      } else {
        // Criar nova tarefa
        const newTask: Task = {
          id: Math.max(...this.tasks.map(t => t.id)) + 1,
          ...formValue,
          status: 'pending',
          createdAt: new Date().toISOString().split('T')[0],
          progress: 0
        };
        this.tasks.push(newTask);
      }
      
      this.updateStats();
      this.applyFilters();
      this.closeModal();
    }
  }

  deleteTask(task: Task) {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
      this.updateStats();
      this.applyFilters();
    }
  }

  startTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index].status = 'in_progress';
      this.tasks[index].progress = 0;
      this.updateStats();
      this.applyFilters();
    }
  }

  completeTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index].status = 'completed';
      this.tasks[index].progress = 100;
      this.updateStats();
      this.applyFilters();
    }
  }

  reopenTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index].status = 'pending';
      this.tasks[index].progress = 0;
      this.updateStats();
      this.applyFilters();
    }
  }

  getChildName(childId: number): string {
    const child = this.children.find(c => c.id === childId);
    return child ? child.name : 'Desconhecido';
  }

  getPriorityText(priority: string): string {
    const priorities = {
      'low': 'Baixa',
      'medium': 'Média',
      'high': 'Alta'
    };
    return priorities[priority as keyof typeof priorities] || priority;
  }

  getStatusText(status: string): string {
    const statuses = {
      'pending': 'Pendente',
      'in_progress': 'Em andamento',
      'completed': 'Concluída',
      'overdue': 'Atrasada'
    };
    return statuses[status as keyof typeof statuses] || status;
  }

  getTaskCardClass(task: Task): string {
    return `task-card-${task.status}`;
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToReports() {
    this.router.navigate(['/reports']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
}
