import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // This looks at the URL (like /details/m31) and grabs the 'm31' part
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.objectData = CELESTIAL_DATA[id];
    }
  }
}