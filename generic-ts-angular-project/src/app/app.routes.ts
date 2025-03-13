import { Routes } from '@angular/router';

import { SoumettreFormulaireComponent } from './features/soumettre-formulaire/soumettre-formulaire.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/soumettre-formulaire', pathMatch: 'full' },
  { path: 'soumettre-formulaire', component: SoumettreFormulaireComponent },
  // D'autres routes peuvent être ajoutées ici
];
