import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  formulaire: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialisation du formulaire avec des champs et des validations
    
    this.formulaire = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    if (this.formulaire.valid) {
      const formData = this.formulaire.value;
      // Effectuer la requête POST à l'URL spécifiée
      this.http.post('rirififiloulou', formData)
        .subscribe(
          response => {
            console.log('Données envoyées avec succès', response);
            // Réinitialiser le formulaire après succès
            this.formulaire.reset();
          },
          error => {
            console.error('Erreur lors de l\'envoi des données', error);
          }
        );
    } else {
      console.log('Le formulaire n\'est pas valide');
    }
  }

  // Méthode appelée lors de l'annulation
  onAnnuler() {
    this.formulaire.reset();
  }
}

