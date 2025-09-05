import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class SettingsComponent implements OnInit {
  profileForm: FormGroup;
  timeForm: FormGroup;
  securityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
      userEmail: ['', [Validators.required, Validators.email]]
    });

    this.timeForm = this.fb.group({
      maxStudyTime: [60, [Validators.required, Validators.min(15), Validators.max(300)]],
      maxFunTime: [90, [Validators.required, Validators.min(15), Validators.max(300)]]
    });

    this.securityForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit() {
    this.loadUserSettings();
  }

  passwordMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword');
    const confirmPassword = form.get('confirmNewPassword');
    
    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
    
    return null;
  }

  loadUserSettings() {
    // Simular carregamento de configurações do usuário
    this.profileForm.patchValue({
      userName: 'Jackson Porciúncula',
      userEmail: 'jackson@exemplo.com'
    });
  }

  onProfileSubmit() {
    if (this.profileForm.valid) {
      console.log('Profile updated:', this.profileForm.value);
      // TODO: Implementar chamada para API
    }
  }

  onTimeSubmit() {
    if (this.timeForm.valid) {
      console.log('Time limits updated:', this.timeForm.value);
      // TODO: Implementar chamada para API
    }
  }

  onSecuritySubmit() {
    if (this.securityForm.valid) {
      console.log('Password changed:', this.securityForm.value);
      // TODO: Implementar chamada para API
    }
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
