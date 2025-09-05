import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./components/login/login').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./components/register/register').then(m => m.RegisterComponent) },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./components/dashboard/dashboard').then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'add-child', 
    loadComponent: () => import('./components/add-child/add-child').then(m => m.AddChildComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'child-dashboard', 
    loadComponent: () => import('./components/child-dashboard/child-dashboard').then(m => m.ChildDashboardComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'activity-history', 
    loadComponent: () => import('./components/activity-history/activity-history').then(m => m.ActivityHistoryComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'profile-selector', 
    loadComponent: () => import('./components/profile-selector/profile-selector').then(m => m.ProfileSelectorComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'settings', 
    loadComponent: () => import('./components/settings/settings').then(m => m.SettingsComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'reports', 
    loadComponent: () => import('./components/reports/reports').then(m => m.ReportsComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'tasks', 
    loadComponent: () => import('./components/tasks/tasks').then(m => m.TasksComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'rewards', 
    loadComponent: () => import('./components/rewards/rewards').then(m => m.RewardsComponent),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/login' }
];
