import { Component } from '@angular/core';
import { AccountService } from '../services';
import { User } from '../models';
import {SidenavService } from '../services/sidenav.service';
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cherry';
  user: User;

  constructor(private accountService: AccountService, public sideNavService: SidenavService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}
