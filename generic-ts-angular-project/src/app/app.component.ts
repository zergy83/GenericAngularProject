import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,  RouterOutlet } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb'; 
 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, BreadcrumbModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'provide-httpclient-example';

   // Définition des éléments de breadcrumb
   items: any[];

   constructor() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', route: '/' },
      { label: 'Users', icon: 'pi pi-box', route: '/users' },
    ];
  }
}
