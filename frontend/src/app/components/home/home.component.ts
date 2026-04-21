import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Must be imported

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // Must be included in imports
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {}