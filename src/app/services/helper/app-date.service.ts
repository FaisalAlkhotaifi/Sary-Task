import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

export enum DateFormatEnum {
  dash = 'yyyy-MM-dd',
  forwardSlash = 'yyyy/MM/dd'
}

@Injectable({
  providedIn: 'root'
})
export class AppDateService {

  private _dashFormat = 'yyyy-MM-dd';
  private _forwardFormat = 'yyyy/MM/dd';

  constructor() { }

  getString(date: Date, dateFormatType: DateFormatEnum = DateFormatEnum.dash) {
    return this._convertToString(date, dateFormatType);
  }

  // Private Methods

  private _convertToString(date: Date, dateFormatType: DateFormatEnum = DateFormatEnum.dash): string | null {
      const datePipe = new DatePipe('en');
      const format = this._getFormat(dateFormatType);

      let formattedDate = datePipe.transform(date, format);
      return formattedDate;
  }

  private _getFormat(dateFormatType: DateFormatEnum): string {
      switch (dateFormatType) {
          case DateFormatEnum.dash:
              return this._dashFormat;
          case DateFormatEnum.forwardSlash:
              return this._forwardFormat;
          default:
              return this._dashFormat;
      }
  }
}
