import { Component } from '@angular/core';
import { UserListComponent } from "../user-list/user-list.component";

@Component({
  selector: 'app-users-rendering',
  imports: [UserListComponent],
  templateUrl: './users-rendering.component.html',
  styleUrl: './users-rendering.component.css'
})
export class UsersRenderingComponent {

}
