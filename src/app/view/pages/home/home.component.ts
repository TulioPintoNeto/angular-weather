import { Component } from '@angular/core';
import { SideMenuComponent } from './../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
