import { Injectable } from '@angular/core';
import { FormFieldConfig } from 'src/app/models/form-field.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  getConfig(): FormFieldConfig[] {
    return [
      {
        title: 'Email',
        type: 'text'
      },
      {
        title: 'Phone',
        type: 'text'
      },
      {
        title: 'Name',
        type: 'text'
      },
      {
        title: 'Company',
        type: 'text'
      },
      {
        title: 'country',
        type: 'dropdown',
        api: 'http://api.countrylayer.com/v2/all?access_key=8ee8336e592df002828f46f25ecae7ea',
        multiple: false,
      },
      {
        title: 'Date',
        type: 'date'
      }
    ];
  }
}
