import { Component, signal } from '@angular/core';
import { ModalConfig } from '../../../models/modal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  isOpen = signal(false);
  
  config = signal<ModalConfig>({});

   private resolveFn!: (value: any) => void;

  open<T>(config: ModalConfig = {}): Promise<T | null> {
    this.config.set(config);
    this.isOpen.set(true);

    return new Promise<T | null>((resolve) => {
      this.resolveFn = resolve;
    });
  }

  close(result: any = null) {
    this.isOpen.set(false);
    this.resolveFn?.(result);
  }
}
