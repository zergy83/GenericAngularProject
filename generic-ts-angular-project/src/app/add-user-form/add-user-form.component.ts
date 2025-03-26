import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-add-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css'
})
export class AddUserFormComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(private userService: UserService) { }

  /*   onSubmit() {
      const neoUser: User = {
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone
      }
      
      this.userService.postUser(neoUser);
    } */

  onSubmit() {
    const neoUser: User = {
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phone
    }

    // deprecated version
/*     this.userService.postUsersAsync(neoUser).subscribe(
      response => {
        console.log('Utilisateur ajouté avec succès', response);
        // Tu peux ajouter une logique ici pour gérer la réussite (par exemple, rediriger ou réinitialiser le formulaire)
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
        // Tu peux ajouter une logique ici pour gérer l'erreur (par exemple, afficher un message d'erreur)
      }
    ); */

        // last version
        this.userService.postUsersAsync(neoUser).subscribe({
          next: (data) => {
            let postedUser = data;
            console.log('add User/ call done', postedUser);
          },
          error: (error) => {
            console.log('add User/ call NOT done', error);
          },
          complete: () => {
            console.log('Add user process completed');
          }
        });
  }
}