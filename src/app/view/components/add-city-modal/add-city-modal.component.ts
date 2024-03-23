import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-city-modal',
  standalone: true,
  imports: [],
  templateUrl: './add-city-modal.component.html',
  styleUrl: './add-city-modal.component.scss',
})
export class AddCityModalComponent {
  activeModal = inject(NgbActiveModal);
}
