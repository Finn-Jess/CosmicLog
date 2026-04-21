import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; // Added this
import { CELESTIAL_DATA, CelestialObject } from '../../models/celestial-data';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class DetailsComponent implements OnInit {
  objectData: CelestialObject | undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient // Injected HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.objectData = CELESTIAL_DATA[id];
    }
  }

  // --- NEW FUNCTION TO SAVE TO MONGO ---
  addToLog() {
    if (!this.objectData) return;

    const newEntry = {
      objectName: this.objectData.name,
      constellation: this.objectData.constellation,
      notes: `Target: ${this.objectData.mId}. Type: ${this.objectData.type}. Distance: ${this.objectData.distance}.`
    };

    // This sends the data to your server.js route
    this.http.post('http://localhost:3000/api/observations', newEntry).subscribe({
      next: (res) => {
        alert(`🚀 Mission Success! ${this.objectData?.name} has been logged in your database.`);
      },
      error: (err) => {
        console.error(err);
        alert('❌ Systems Failure: Could not connect to the log server.');
      }
    });
  }
}