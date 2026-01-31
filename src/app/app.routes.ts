import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () =>
        import('./dashboard/users-list/users-list/users-list.component').then(
            m => m.UsersListComponent
        )
    },
];
