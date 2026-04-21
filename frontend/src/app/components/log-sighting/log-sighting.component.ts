import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ObservationService } from '../../services/observation.service';
import { Observation } from '../../models/observation'; // Checked: Correct name

@Component({
  selector: 'app-log-sighting',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './log-sighting.html',
  styleUrl: './log-sighting.css'
})
export class LogSightingComponent {
  newLog: Observation = {
    userId: 'lemon', 
    objectName: '',
    date: '',
    location: '',
    equipment: '',
    notes: ''
  };

  constructor(private obsService: ObservationService, private router: Router) {}

  submitLog() {
    this.obsService.saveSighting(this.newLog).subscribe({
      next: (res) => {
        alert('Sighting transmitted to Earth station!');
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        alert('Transmission failed. Ensure your server.js is running!');
      }
    });
  }
}