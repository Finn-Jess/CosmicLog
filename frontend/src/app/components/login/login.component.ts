import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    console.log('Attempting login for:', this.loginData.email);

    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        // This confirms the server said "Yes"
        console.log('Server Response:', res);
        alert('Access Granted! Welcome back, ' + res.username);
        
        // This physically moves the browser to the Catalog page
        this.router.navigate(['/catalog']); 
      },
      error: (err) => {
        console.error('Login Error Details:', err);
        alert('Authentication failed. The stars are not aligned (check email/password).');
      }
    });
  }
}