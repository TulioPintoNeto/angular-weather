import { Component, OnInit, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CountriesService } from '../../../data/services/countries/countries.service';

@Component({
  selector: 'app-add-city-modal',
  standalone: true,
  imports: [],
  templateUrl: './add-city-modal.component.html',
  styleUrl: './add-city-modal.component.scss',
})
export class AddCityModalComponent implements OnInit {
  countries: Country[] = [];
  loading: boolean = false;
  error: string | null = null;

  activeModal = inject(NgbActiveModal);

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.countriesService.get().subscribe({
      next: (response) => {
        this.countries = response;
        this.error = null;
      },
      error: (error) => {
        this.error = error;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
