import { Component } from '@angular/core';
import { ClickableRowComponent } from '../clickable-row/clickable-row.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [ClickableRowComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {}