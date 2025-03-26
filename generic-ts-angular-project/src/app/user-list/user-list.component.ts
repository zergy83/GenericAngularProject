import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { CommonModule } from '@angular/common';
import { User } from '../interface/user';
import { CardModule } from 'primeng/card';
import { AddUserFormComponent } from "../add-user-form/add-user-form.component";
import { Dialog } from 'primeng/dialog';
import { EditUserFormComponent } from "../edit-user-form/edit-user-form.component";   

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule, CardModule, AddUserFormComponent, EditUserFormComponent, Dialog]
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

  selectedUser: User | null = null;
  displayEditModal: boolean = false; 

  constructor(private userService: UserService, private commonModule: CommonModule) { }

  ngOnInit(): void {
  }

  loadUsers(): void {
    this.isLoading = true;
    //reinit les erreurs
    this.errorMessage = '';

    // last version
    this.userService.getFilteredUsers().subscribe({
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

    // Ouvrir la modale et passer l'utilisateur sélectionné
    openEditModal(user: User): void {
      this.selectedUser = user;
      console.log('selectedUser', this.selectedUser);
      this.displayEditModal = true;
    }
  
    // Fermer la modale
    closeEditModal(): void {
      this.displayEditModal = false;
      this.selectedUser = null;
    }
}
