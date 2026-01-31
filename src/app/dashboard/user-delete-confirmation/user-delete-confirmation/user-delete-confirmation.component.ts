import { Component, Host } from '@angular/core';
import { ModalComponent } from '../../../core/shared/modal/modal/modal.component';

@Component({
  selector: 'app-user-delete-confirmation',
  imports: [],
  standalone: true,
  templateUrl: './user-delete-confirmation.component.html',
  styleUrl: './user-delete-confirmation.component.css'
})
export class UserDeleteConfirmationComponent {

  constructor(@Host() private modal: ModalComponent) {}

  cancel() {
    this.modal.close(false);
  }

  confirm() {
    this.modal.close(true);
  }

}
