import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/providers/models/login.model';
import { AuthService } from 'src/app/providers/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  makeLogin(login) {
    this.authService.login(login).subscribe(success => {
      if (success.body.token) {
        localStorage.setItem('token', success.body.token);
      }

      if (this.router.url.includes('login')) {
        this.router.navigate(['/home']);
      }
    },
    error => {
      alert("Login error, try again");
    });
  }
}
