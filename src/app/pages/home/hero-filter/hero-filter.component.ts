import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { FormFieldConfig } from 'src/app/models/form-field.model';

import { AppDateService } from 'src/app/services/helper/app-date.service';
import { FilterService } from 'src/app/services/static-data/filter.service';

import { Store } from '@ngrx/store';

import { GetHeroes } from 'src/app/store/actions/hero.action';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrls: ['./hero-filter.component.scss']
})
export class HeroFilterComponent implements OnInit {

  filterFormFieldConfig: FormFieldConfig[] = [];
  queryParams: Params = {};

  constructor(
    private _filterService: FilterService,
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _appDateService: AppDateService,
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.filterFormFieldConfig = this._filterService.getConfig();

    this._activeRoute.queryParams.subscribe((params: Params) => {
      this._setFormValues(params)
    });
  }

  onFilter(data: any) {
    const queryParams = this._getQueryParams(data);

    this._updateHeroListDisplayData(queryParams);

    this._router.navigate([], {
      relativeTo: this._activeRoute,
      queryParams: queryParams,
    });
  }

  // Private Methods

  private _setFormValues(queryParams: Params) {
    if (!queryParams || Object.keys(queryParams).length === 0) {
      return;
    }

    this.filterFormFieldConfig = this.filterFormFieldConfig.map((f) => {
      const queryParamsKey = 'user_' + f.title.toLocaleLowerCase();
      const queryParamsValue = queryParams[queryParamsKey];
      
      if (queryParamsValue) {
        f.value = queryParamsValue;
      }
      
      return f;
    });
  }

  private _getQueryParams(data: any) {
    const queryParams: any = {};

    Object.keys(data).map((key) => {
      let value = data[key];
      const keyLowerCase = key.toLocaleLowerCase();
      const newKey = 'user_' + keyLowerCase;

      if (keyLowerCase === 'date') {
        value = this._appDateService.getString(value) || '';
      } 
      
      if (value) {
        queryParams[newKey] = value;
      }
    });

    return queryParams;
  }

  _updateHeroListDisplayData(filter: any) {
    this._store.dispatch(new GetHeroes(filter));
  }
}
