import { Component, OnInit, Input } from '@angular/core';
import {SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
@Input() public show: boolean;
  constructor(public sideNavService: SidenavService) { }

  ngOnInit(): void {
  }

}
