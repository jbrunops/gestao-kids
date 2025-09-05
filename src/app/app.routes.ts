import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./components/login/login').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./components/register/register').then(m => m.RegisterComponent) },
  { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard').then(m => m.DashboardComponent) },
  { path: 'add-child', loadComponent: () => import('./components/add-child/add-child').then(m => m.AddChildComponent) },
  { path: 'child-dashboard', loadComponent: () => import('./components/child-dashboard/child-dashboard').then(m => m.ChildDashboardComponent) },
  { path: 'activity-history', loadComponent: () => import('./components/activity-history/activity-history').then(m => m.ActivityHistoryComponent) },
  { path: 'profile-selector', loadComponent: () => import('./components/profile-selector/profile-selector').then(m => m.ProfileSelectorComponent) },
  { path: 'settings', loadComponent: () => import('./components/settings/settings').then(m => m.SettingsComponent) },
  { path: 'reports', loadComponent: () => import('./components/reports/reports').then(m => m.ReportsComponent) },
  { path: '**', redirectTo: '/login' }
];
