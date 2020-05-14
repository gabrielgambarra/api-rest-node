import { Component } from '@angular/core';
import { AuthService } from './providers/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private authService: AuthService
  ) {
    this.authService.ping().subscribe(success => {
      console.log(success.message);
    });
  }
}
