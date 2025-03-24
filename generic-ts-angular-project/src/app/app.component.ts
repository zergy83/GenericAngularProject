import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from "./form-component/form-component.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    FormComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-form-component></app-form-component>

    <router-outlet />
  `,
  styles: [],
})

export class AppComponent {
  title = 'Project test for angular 19';
}

import { CommonModule } from '@angular/common';
