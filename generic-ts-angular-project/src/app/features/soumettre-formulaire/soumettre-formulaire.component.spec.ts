import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoumettreFormulaireComponent } from './soumettre-formulaire.component';

describe('SoumettreFormulaireComponent', () => {
  let component: SoumettreFormulaireComponent;
  let fixture: ComponentFixture<SoumettreFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoumettreFormulaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoumettreFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
