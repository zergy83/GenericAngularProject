import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userToEdit'] && this.userToEdit) {
      // Lorsque userToEdit change, on réinitialise le formulaire avec les nouvelles données
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
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    let updatedUser: User = {
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phone
    };

    console.log(updatedUser);

    this.userService.putUser(updatedUser);
  }
}

