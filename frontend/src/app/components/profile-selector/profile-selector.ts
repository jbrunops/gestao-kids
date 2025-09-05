import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChildProfile } from '../../models/child.model';

@Component({
  selector: 'app-profile-selector',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-selector.html',
  styleUrl: './profile-selector.scss'
})
export class ProfileSelectorComponent implements OnInit {
  selectedProfile = '';
  profiles: ChildProfile[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Mock data - em produção viria do serviço
    this.profiles = [
      {
        id: 1,
        name: 'Sofia',
        avatar: 'assets/avatars/sofia.svg'
      },
      {
        id: 2,
        name: 'Lucas',
        avatar: 'assets/avatars/lucas.svg'
      },
      {
        id: 3,
        name: 'Isabela',
        avatar: 'assets/avatars/isabela.svg'
      }
    ];
  }

  onEnter() {
    if (this.selectedProfile) {
      // TODO: Implementar lógica de seleção de perfil
      console.log('Selected profile:', this.selectedProfile);
      this.router.navigate(['/child-dashboard']);
    }
  }
}
