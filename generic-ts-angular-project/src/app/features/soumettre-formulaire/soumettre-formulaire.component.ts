import { Component } from '@angular/core';
import { FormulaireComponent } from '../formulaire/formulaire.component';

@Component({
  selector: 'app-soumettre-formulaire',
  imports: [FormulaireComponent],
  templateUrl: './soumettre-formulaire.component.html',
  styleUrl: './soumettre-formulaire.component.css'
})

export class SoumettreFormulaireComponent {
  constructor() {}

  // Cette méthode peut être utilisée pour traiter la soumission si nécessaire.
  onSubmit() {
    console.log('Le formulaire a été soumis');
  }
}
