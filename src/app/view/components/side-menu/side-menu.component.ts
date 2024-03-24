import { Component, TemplateRef, inject } from '@angular/core';
import { AutoUpdateComponent } from './auto-update/auto-update.component';
import { ClickableRowComponent } from './clickable-row/clickable-row.component';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCityModalComponent } from '../add-city-modal/add-city-modal.component';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [AutoUpdateComponent, ClickableRowComponent, NgbDatepickerModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  private modalService = inject(NgbModal);
  citiesText: string[] = this.citiesService.cities.map(this.cityToCityText)

  constructor(private citiesService: CitiesService) {}

  open() {
    console.log('he');
    this.modalService.open(AddCityModalComponent);
  }

  cityToCityText({name, country}: City): string {
    return `${name}, ${country.code} - 283.23 °F`;
  }
}
