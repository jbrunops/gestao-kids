import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-child',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-child.html',
  styleUrl: './add-child.scss'
})
export class AddChildComponent {
  addChildForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.addChildForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(18)]],
      allowStudy: [true],
      allowFun: [true]
    });
  }

  onSubmit() {
    if (this.addChildForm.valid) {
      // TODO: Implementar chamada para API para adicionar criança
      console.log('Child data:', this.addChildForm.value);
      // Simular adição bem-sucedida
      this.router.navigate(['/dashboard']);
    }
  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }
}
