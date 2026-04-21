import { Component } from '@angular/core';
import { BortlePipeComponent } from '../../pipes/bortle-pipe.component';

@Component({
  selector: 'app-home',
  imports: [BortlePipeComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
