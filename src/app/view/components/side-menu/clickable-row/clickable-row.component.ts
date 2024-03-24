import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clickable-row',
  standalone: true,
  imports: [],
  templateUrl: './clickable-row.component.html',
  styleUrl: './clickable-row.component.scss',
})
export class ClickableRowComponent {
  @Input()
  iconClass: string = 'bi bi-geo-alt';
  
  @Input({ required: true })
  text!: string;

  @Output()
  handleEvent = new EventEmitter();

  onClick() {
    this.handleEvent.emit();
  }
}
