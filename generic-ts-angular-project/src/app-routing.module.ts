import { Route } from '@angular/router';
import { UserListComponent } from './app/user-list/user-list.component';

// Définir les routes pour l'application
export const routes: Route[] = [
    {
      path: 'users',  // L'URL de la page
      component: UserListComponent  // Le composant associé à la route /users
    }
  ];
