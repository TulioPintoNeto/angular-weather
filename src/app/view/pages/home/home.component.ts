import { Component } from '@angular/core';
import { SideMenuComponent } from './../../components/side-menu/side-menu.component';
import { MainContentComponent } from '../../components/main-content/main-content.component';
import { GlobalControllerService } from '../../controllers/global-controller.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideMenuComponent, MainContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  _selectedLocation: LocationDetails | null = null;

  constructor(private globalControllerService: GlobalControllerService) {}

  setLocation(locationDetails: LocationDetails) {
    this._selectedLocation = locationDetails;
    this.globalControllerService.update(locationDetails);
  }

  get selectedLocation(): LocationDetails | null {
    return (
      this._selectedLocation || this.globalControllerService.locationsDetails[0]
    );
  }
}
