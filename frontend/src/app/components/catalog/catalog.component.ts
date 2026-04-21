import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CelestialObject } from '../../models/celestial-object';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class CatalogComponent implements OnInit {
  searchTerm: string = '';
  
  allObjects: CelestialObject[] = [
    { id: 'm31', name: 'Andromeda', type: 'Galaxy', constellation: 'Andromeda Galaxy' },
    { id: 'm42', name: 'Orion Nebula', type: 'Nebula', constellation: 'Orion' },
    { id: 'm45', name: 'Pleiades', type: 'Star Cluster', constellation: 'Taurus' },
    { id: 'm57', name: 'Ring Nebula', type: 'Planetary Nebula', constellation: 'Lyra' },
    { id: 'm51', name: 'Whirlpool Galaxy', type: 'Galaxy', constellation: 'Canes Venatici' },
    { id: 'm13', name: 'Hercules Cluster', type: 'Globular Cluster', constellation: 'Hercules' }
  ];

  filteredObjects: CelestialObject[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Start by showing all stars in the sky
    this.filteredObjects = this.allObjects;
  }

  filterResults() {
    if (!this.searchTerm) {
      this.filteredObjects = this.allObjects;
      return;
    }

    this.filteredObjects = this.allObjects.filter(obj =>
      obj.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewData(obj: CelestialObject) {
    this.router.navigate(['/details', obj.id]);
  }
}