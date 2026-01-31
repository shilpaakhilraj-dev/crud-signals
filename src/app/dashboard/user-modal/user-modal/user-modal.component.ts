import { Component, signal } from '@angular/core';
import { User, UserModalConfig } from '../../../core/models/user.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-modal',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.css'
})
export class UserModalComponent {

  isOpen = signal(false);

  form!: FormGroup;

  public config!: UserModalConfig;
  
  private resolveFn!: (value: User | null) => void;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
      website: [''],
      address: this.fb.group({
        street: [''],
        suite: [''],
        city: [''],
        zipcode: ['']
      }),
      company: this.fb.group({
        name: [''],
        catchPhrase: [''],
        bs: ['']
      })
    });
  }

  open(config: UserModalConfig): Promise<User | null> {
    this.config = config;
    this.isOpen.set(true);
    this.form.reset();
    if (config.mode === 'edit' && config.data) {
      this.form.patchValue(config.data);
    }
    return new Promise(resolve => {
      this.resolveFn = resolve;
    });
  }

  hide(): void {
    this.resolveFn(null);
    this.isOpen.set(false);
  }

  onSubmit(): void {
    this.resolveFn(this.form.value);
    this.isOpen.set(false);
  }



}
