import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { firstValueFrom } from 'rxjs';
import { UserModalComponent } from '../../user-modal/user-modal/user-modal.component';
import { ModalComponent } from '../../../core/shared/modal/modal/modal.component';
import { UserDeleteConfirmationComponent } from '../../user-delete-confirmation/user-delete-confirmation/user-delete-confirmation.component';
import { LoaderService } from '../../../core/services/loader/loader.service';
import { UserService } from '../../../core/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule,
    UserModalComponent,
    ModalComponent,
    UserDeleteConfirmationComponent
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  @ViewChild('userModal') userModal!: UserModalComponent;

  @ViewChild('deleteConfirmationModal') deleteConfirmationModal!: ModalComponent;

  users = signal<User[]>([]); 

  loaderService = inject(LoaderService);

  userService = inject(UserService);
  
  // ngOnInit(): void {
  //   this.loadUsers();
  // }

  router = inject(Router);

  ngOnInit(): void {
    this.loadUsers();
  }

  async loadUsers(): Promise<void> {
    try {
      this.loaderService.show();
      const data = await firstValueFrom(this.userService.fetchUsers());
      this.users.set(data);
    } 

    catch(err) {
      console.log('Error loading users', err)
    }

    finally {
      await this.loaderService.hide();
    }
  }

  async addUser(): Promise<void> {
    const result = await this.userModal.open({
      mode: 'create',
      title: 'Create User'
    });

    if (!result) {
      return;
    }

    try {
      this.loaderService.show();
      const newUser = await firstValueFrom(this.userService.addUser(result))
      this.users.update(users => [...users, newUser]);
    }

    catch(err) {
      console.log('Failed to add the user', err)
    }

    finally {
      await this.loaderService.hide();
    }
  }

  async editUser(user: User): Promise<void> {
    const result = await this.userModal.open({
      mode: 'edit',
      title: 'Edit User',
      data: user
    });

    if (!result) {
      return;
    }

    try {
      this.loaderService.show();
      const updatedUser = await firstValueFrom(this.userService.updateUser(result));
      this.users.update(user => user.map(u => u.id === updatedUser.id ? updatedUser : u));
    }

    catch (err) {
      console.error('Update failed', err);
    }

    finally {
      await this.loaderService.hide();
    }
  }

  async onClickDelete(user: User): Promise<void> {
    if (!user) return;

    const confirmed = await this.deleteConfirmationModal.open<boolean>({
      size: 'md',
      position: 'top',
    });

    if (!confirmed) {
      return;
    }

    try {
      this.loaderService.show();
      await firstValueFrom(this.userService.deleteUser(user.id));
      this.users.update(users => users.filter(u => u.id !== user.id));
    }

    catch(err) {
      console.log('Failed to delete the user', err)
    }

    finally {
      await this.loaderService.hide();
    }
  }
}
