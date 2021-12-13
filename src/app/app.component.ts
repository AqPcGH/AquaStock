import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  constructor(private changeDetector: ChangeDetectorRef, private authService: AuthService) {}
  title = "Stock Mangement System"
  isLoggedIn = false;

  logout() {
    this.authService.logout();
  }

  loggedin() {
    this.authService.loggedIn();
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngOnInit() {
    this.isLoggedIn = !!this.authService.loggedIn();
  }
}

