import { Component } from '@angular/core';
import { GlobalControllerService } from '../../../controllers/global-controller.service';

@Component({
  selector: 'app-auto-update',
  standalone: true,
  imports: [],
  templateUrl: './auto-update.component.html',
  styleUrl: './auto-update.component.scss',
})
export class AutoUpdateComponent {
  constructor(private globalController: GlobalControllerService) {}

  onChange(event: Event) {
    if (event.target && 'checked' in event.target) {
      this.globalController.setAutoUpdated(Boolean(event.target.checked));
    }
  }
}
