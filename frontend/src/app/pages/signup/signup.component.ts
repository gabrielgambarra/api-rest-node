import { Component, OnInit, ViewChild } from '@angular/core';
import { Signup } from 'src/app/providers/models/signup.model';
import { NgModel } from '@angular/forms';
import { AuthService } from 'src/app/providers/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup: Signup = new Signup();

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  signupAndLogin(signup: Signup) {
    this.authService.signup(signup).subscribe(success => {
      console.log(success);
      localStorage.setItem('token', success.token);
      
      if (this.router.url.includes('signup')) {
        this.router.navigate(['/home']);
      }
    });

  }

}
