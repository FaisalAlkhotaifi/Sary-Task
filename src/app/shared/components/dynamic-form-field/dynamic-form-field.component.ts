import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { map } from 'rxjs';
import { DropdwonOptions } from 'src/app/models/dropdown-options.model';
import { FormFieldConfig } from 'src/app/models/form-field.model';
import { CountryService } from 'src/app/services/api/country.service';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss']
})
export class DynamicFormFieldComponent implements OnInit {

  @Input() field?: FormFieldConfig;
  @Input() form?: FormGroup;
  
  @ViewChild(MatSelect) select?: MatSelect;

  options: DropdwonOptions[] = [];

  constructor(
    private _http: HttpClient,
    private _countryService: CountryService
  ) { }

  ngOnInit(): void {
    if (this.field && this.field.api) {
      this.getOptionsFromApi(this.field.api);
    }
  }

  getOptionsFromApi(apiUrl: string) {
    // use this for testing instead of country api 
    // since there is only country api and country api has limit requests
    this.options = this._countryService.getAllLocal();
    
    // this._http.get<any>(apiUrl)
    //   .pipe(
    //     map((response) => 
    //       response.map((c: any) => {
    //         return { key: c.alpha3Code, name: c.name } 
    //       })
    //     )
    //   )
    //   .subscribe({
    //     next: (options) => this.options = options,
    //     error: (error) => console.log(error)
    //   });
  }

  trackByFn(index: number, item: DropdwonOptions): string {
    return item.key;
  }

}
