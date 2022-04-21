import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from 'src/app/models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    { name: 'Kathryn Murphy', phone: '(252) 555-0126', email: 'tanya.hill@example.com', date: new Date('03/06/2018'), country: 'Saudi Arabia', company: 'L\'Oreal' },
    { name: 'Wade Warren', phone: '(671) 555-0110', email: 'dolores.chambers@example.com', date: new Date('09/24/2017'), country: 'Serbia', company: 'eBay' },
    { name: 'Devon Lane', phone: '(209) 555-0104', email: 'sara.crus@example.com', date: new Date('02/09/2015'), country: 'Russian Federation', company: 'Gillette' },
    { name: 'Albert Flores', phone: '(808) 555-0111', email: 'deanna.curtis@example.com', date: new Date('11/16/2014'), country: 'Poland', company: 'Louis Vuitton' },
    { name: 'Jerome Bell', phone: '(505) 555-0125', email: 'michelle.rivera@example.com', date: new Date('10/31/2017'), country: 'Poland', company: 'Facebook' },
    { name: 'Eleanor Pena', phone: '(303) 555-0105', email: 'kenzi.lawson@example.com', date: new Date('11/28/2015'), country: 'Saint Barthélemy', company: 'McDonald\'s' },
    { name: 'Annette Black', phone: '(702) 555-0122', email: 'jessica.hanson@example.com', date: new Date('03/13/2014'), country: 'Réunion', company: 'Starbucks' },
    { name: 'Darrell Steward', phone: '(207) 555-0119', email: 'debra.holt@example.com', date: new Date('05/31/2015'), country: 'Poland', company: 'Mitsubishi' },
    { name: 'Kristin Watson', phone: '(307) 555-0133', email: 'felicia.reid@example.com', date: new Date('12/02/2018'), country: 'Pakistan', company: 'MasterCard' },
    { name: 'Jane Cooper', phone: '(208) 555-0112', email: 'georgia.young@example.com', date: new Date('02/28/2018'), country: 'Morocco', company: 'Gillette' },
    { name: 'Theresa Webb', phone: '(684) 555-0102', email: 'nathan.roberts@example.com', date: new Date('05/09/2014'), country: 'South African', company: 'General Electric' },
    { name: 'Arlene McCoy', phone: '(405) 555-0128', email: 'jackson.graham@example.com', date: new Date('09/09/2013'), country: 'Haiti', company: 'Nintendo' },
    { name: 'Darlene Robertson', phone: '(316) 555-0116', email: 'alma.lowson@example.com', date: new Date('11/07/2017'), country: 'Iceland', company: 'eBay' },
    { name: 'Floyd Miles', phone: '(704) 555-0127', email: 'bill.sanders@example.com', date: new Date('05/20/2015'), country: 'Greece', company: 'Louis Vuitton' },
    { name: 'Dianne Russell', phone: '(201) 555-0124', email: 'michael.mit@example.com', date: new Date('12/29/2012'), country: 'Guinea', company: 'Ferrari' },
  ];

  constructor() { }

  getAll(): Hero[] {
    return this.heroes;
  }

  getAllObservable(): Observable<Hero[]> {
    return of(this.heroes);
  }

  getAllfilteredObservable(filter: any): Observable<Hero[]> {
    const filteresHeroes = this.heroes.filter((h) => {
      // If filter is empty then return all
      if (!filter || Object.keys(filter).length === 0) {
        return true;
      }

      if (filter.user_name) {
        return h.name.toLocaleLowerCase().includes(filter.user_name.toLocaleLowerCase())
      }
      if (filter.user_phone) {
        return h.phone.includes(filter.user_phone)
      }
      if (filter.user_email) {
        return h.email.toLocaleLowerCase().includes(filter.user_email.toLocaleLowerCase())
      }
      if (filter.user_company) {
        return h.company.toLocaleLowerCase().includes(filter.user_company.toLocaleLowerCase())
      }
      if (filter.user_country) {
        return h.country.includes(filter.user_country)
      }
      if (filter.user_date) {
        const filterDate = new Date(filter.user_date);
        const filterDateFormated = new Date(filterDate.getFullYear(), filterDate.getMonth(), filterDate.getDate());

        return h.date.getTime() === filterDateFormated.getTime();
      }

      return false;
    });
    return of(filteresHeroes);
  }
}
