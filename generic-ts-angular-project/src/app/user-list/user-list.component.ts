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

export class UserListComponent implements OnInit {

  users: User[] = [];
  isLoading: boolean = false;
  errorMessage: string = 'Cannot get users';

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
