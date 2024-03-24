import { Component, OnInit, inject } from '@angular/core';
import { NgbActiveModal, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CountriesService } from '../../../data/services/countries/countries.service';
import { CitiesService } from '../../../data/services/cities/cities.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { GlobalControllerService } from '../../controllers/global-controller.service';
import {
  Observable,
  OperatorFunction,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs';

@Component({
  selector: 'app-add-city-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgbTypeaheadModule],
  templateUrl: './add-city-modal.component.html',
  styleUrl: './add-city-modal.component.scss',
})
export class AddCityModalComponent implements OnInit {
  addCityForm!: FormGroup;

  countries: Country[] = [];
  areCountriesLoading: boolean = false;
  countriesError: string | null = null;

  cities: City[] = [];
  areCitiesLoading: boolean = false;
  citiesError: string | null = null;

  activeModal = inject(NgbActiveModal);

  constructor(
    private countriesService: CountriesService,
    private citiesService: CitiesService,
    private citiesControllerService: GlobalControllerService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeCountriesList();
  }

  initializeForm() {
    this.addCityForm = new FormGroup({
      country: new FormControl(''),
      city: new FormControl<City | null>(null),
    });

    this.addCityForm.get('country')?.valueChanges.subscribe({
      next: (countryCode) => this.updateCityList(countryCode),
    });
  }

  initializeCountriesList() {
    this.areCountriesLoading = true;
    this.countriesService.get().subscribe({
      next: (countries) => {
        this.countries = countries;
        this.countriesError = null;
      },
      error: (error) => (this.countriesError = error),
      complete: () => (this.areCountriesLoading = false),
    });
  }

  updateCityList(countryCode: string | null) {
    if (!countryCode) {
      return;
    }

    const country = this.countries.find(({ code }) => countryCode === code);

    if (!country) {
      return;
    }

    if (country) {
      this.areCountriesLoading = true;
      this.citiesService.get(country).subscribe({
        next: (cities) => {
          this.cities = cities;
          this.citiesError = null;
        },
        error: (error) => (this.countriesError = error),
        complete: () => (this.areCitiesLoading = false),
      });
    }
  }

  formatter = ({ name }: City) => name;

  search: OperatorFunction<string, readonly City[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        this.cities
          .filter(({ name }) => new RegExp(term, 'mi').test(name))
          .slice(0, 10)
      )
    );

  onSubmit() {
    const city: City = this.addCityForm.value.city;

    if (city) {
      this.citiesControllerService.add(city);
      this.activeModal.close();
    }
  }
}
