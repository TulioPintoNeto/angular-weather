import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() fullHeight: boolean = false;
  @Input() padding: boolean = true;
}
