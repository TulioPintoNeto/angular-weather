import { Component, Input } from '@angular/core';
import { GlobalControllerService } from '../../../controllers/global-controller.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true })
  locationDetails: LocationDetails | null = null;

  constructor(private globalController: GlobalControllerService) {}

  refresh() {
    if (this.locationDetails) {
      this.globalController.update(this.locationDetails);
    }
  }
}
