import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'; // Importer le service
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule]
})



export class UserListComponent implements OnInit {

  users: any[] = [];  // Tableau pour stocker les utilisateurs
  isLoading: boolean = false;  // Indicateur pour l'état de chargement
  errorMessage: string = '';  // Pour afficher les erreurs, le cas échéant

  constructor(private userService: UserService, private commonModule: CommonModule) {}

  ngOnInit(): void {
    // Tu peux initialiser ici ou appeler `getUsers` directement quand le composant est chargé
  }

  // Méthode pour charger les utilisateurs quand le bouton est cliqué
  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';  // Réinitialiser les erreurs

    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;  // Assignation des utilisateurs récupérés
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Error loading users';  // Gestion des erreurs
        this.isLoading = false;
      }
    );
  }
}
