import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // This sends the data to your server.js
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        alert('Access Granted, Commander!');
        this.router.navigate(['/catalog']); 
      },
      error: (err) => {
        // This will tell us if it's 401 (wrong pass) or 0 (server off)
        console.error(err);
        alert(`Login Failed: Error ${err.status}`);
      }
    });
  }
}