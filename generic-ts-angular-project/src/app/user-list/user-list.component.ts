import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { CommonModule } from '@angular/common';
import { User } from '../interface/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule]
})

/**
 * Composant qui gère le get et l'affichage de la liste des utilisateurs.
 * Ce composant charge les utilisateurs depuis un service et une interface User et les affiche dans un template.
 * Il gère également l'état de chargement et les erreurs de requete REST.
 */
export class UserListComponent implements OnInit {

  users: User[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private userService: UserService, private commonModule: CommonModule) { }

  ngOnInit(): void {
  }

  loadUsers(): void {
    this.isLoading = true;
    //reinit les erreurs
    this.errorMessage = '';

    // last version
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error loading users';
        this.isLoading = false;
      },
      complete: () => {
        console.log('Complete call for users');
      }
    });

    //old version
    /*     this.userService.getUsers().subscribe(
          (data) => {
            this.users = data;  // Assignation des utilisateurs récupérés
            this.isLoading = false;
          },
          (error) => {
            this.errorMessage = 'Error loading users';  // Gestion des erreurs
            this.isLoading = false;
          }
        );
      } */
  }
}
