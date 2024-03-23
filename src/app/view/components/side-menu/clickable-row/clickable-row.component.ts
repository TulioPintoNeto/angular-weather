import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clickable-row',
  standalone: true,
  imports: [],
  templateUrl: './clickable-row.component.html',
  styleUrl: './clickable-row.component.scss',
})
export class ClickableRowComponent {
  @Input() iconClass: string = 'bi bi-geo-alt';
  @Input() text: string = '';
}
