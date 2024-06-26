import { Component, EventEmitter, Output, inject } from '@angular/core';
import { AutoUpdateComponent } from './auto-update/auto-update.component';
import { ClickableRowComponent } from './clickable-row/clickable-row.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCityModalComponent } from '../add-city-modal/add-city-modal.component';
import { GlobalControllerService } from '../../controllers/global-controller.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    AutoUpdateComponent,
    ClickableRowComponent,
    HttpClientModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  @Output()
  updateLocationEvent = new EventEmitter<LocationDetails>();

  private modalService = inject(NgbModal);

  constructor(private citiesController: GlobalControllerService) {}

  open() {
    this.modalService.open(AddCityModalComponent);
  }

  get locationsDetails() {
    return this.citiesController.locationsDetails;
  }

  get citiesText() {
    return this.citiesController.locationsDetails.map(this.cityToCityText);
  }

  cityToCityText({
    name,
    country,
    weatherConditions: { temperature },
  }: LocationDetails): string {
    return `${name}, ${country.code} - ${temperature} °F`;
  }

  onRowClick(locationDetails: LocationDetails) {
    this.updateLocationEvent.emit(locationDetails);
  }
}
