import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  // Fixed path: looking into the register subfolder
  templateUrl: './register.html', 
  styleUrls: ['./register.css'],
  imports: [FormsModule]
})
export class RegisterComponent {
  userData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    // Calling .register() to match the fixed AuthService
    this.authService.signup(this.userData).subscribe({
      next: (res: any) => {
        alert('Welcome to the crew!');
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error('Signup failed', err);
        alert('Systems Failure: Could not create account.');
      }
    });
  }
}