import { Component } from '@angular/core';
import { SideMenuComponent } from './../../components/side-menu/side-menu.component';
import { MainContentComponent } from '../../components/main-content/main-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SideMenuComponent,
    MainContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
