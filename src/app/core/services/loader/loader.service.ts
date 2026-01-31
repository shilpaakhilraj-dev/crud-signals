import { Injectable, signal } from '@angular/core';
import { firstValueFrom, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private readonly MIN_TIME = 1500;

  private startTime = 0;

  loading = signal(false);

  constructor() { }

  show(): void {
    this.startTime = Date.now();
    this.loading.set(true);
  }

  async hide(): Promise<void> {
    const elapsed = Date.now() - this.startTime;
    const remaining = this.MIN_TIME - elapsed;

    if (remaining > 0) {
      await firstValueFrom(timer(remaining));
    }
    
    this.loading.set(false);
  }
}
