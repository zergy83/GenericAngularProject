import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../interface/user';


@Component({
  selector: 'app-edit-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user-form.component.html',
  styleUrl: './edit-user-form.component.css'
})
export class EditUserFormComponent {
  @Input() userToEdit: User | null = null; 

  form!: FormGroup;

  constructor(private userService: UserService) { }

    ngOnInit(): void {
    // Initialisation du formulaire avec les données de l'utilisateur
    if (this.userToEdit) {
        console.log('User to edit', this.userToEdit);

      this.form = new FormGroup({
        name: new FormControl(this.userToEdit.name),
        email: new FormControl(this.userToEdit.email),
        phone: new FormControl(this.userToEdit.phone)
      });
    } else {
      // Si aucun utilisateur n'est passé, on initialise avec des valeurs vides
      this.form = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl('')
      });
    }

    console.log('Form', this.form);
  }

  onSubmit() {
    let neoUser: User = {
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phone
    }

    console.log(neoUser);

    this.userService.putUser(neoUser);
  }
}

