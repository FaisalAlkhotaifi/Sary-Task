import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  accessKey: string = environment.countryApiKey;
  baseUrl: string = 'https://api.countrylayer.com/v2/';

  constructor(
    private _http: HttpClient
  ) { }

  getAll() {
    const url = `${this.baseUrl}/all`
    const params = { access_key: this.accessKey }
    return this._http.get(url, { params: params });
  }

  getAllLocal() {
    return [
      { key: 'SAU', name: 'Saudi Arabia' },
      { key: 'SRB', name: 'Serbia' },
      { key: 'RUS', name: 'Russian Federation' },
      { key: 'POL', name: 'Poland' },
      { key: 'BLM', name: 'Saint Barthélemy' },
      { key: 'REU', name: 'Réunion' },
      { key: 'PAK', name: 'Pakistan' },
      { key: 'MAR', name: 'Morocco' },
      { key: 'ZAF', name: 'South African' },
      { key: 'HTI', name: 'Haiti' },
      { key: 'ISL', name: 'Iceland' },
      { key: 'GRC', name: 'Greece' },
      { key: 'GIN', name: 'Guinea' },
      { key: 'ALA', name: 'Åland Islands' },
      { key: 'BHR', name: 'Bahrain' },
    ];
  }
}
