import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Hero } from 'src/app/models/hero.model';

import { select, Store } from '@ngrx/store';

import { GetHeroes } from 'src/app/store/actions/hero.action';
import { selectHeroList } from 'src/app/store/selectors/hero.selectors';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit, AfterViewInit {
  
  @Output() onFilterClicked = new EventEmitter();

  @ViewChild(MatSort) sort?: MatSort;

  heroes: Hero[] = [];
  heroesDataSource = new MatTableDataSource<Hero>();
  displayedColumns = [
    'name',
    'phone',
    'email',
    'date',
    'country',
    'company',
  ]

  constructor(
    private _store: Store<AppState>
  ) { }

  get heroList() {
    return this._store.pipe(select(selectHeroList))
  }

  ngOnInit(): void {
    this.loadHerores();
    this.getHeroes();
  }

  ngAfterViewInit(): void {
    this.setSortForDataSource();
  }

  loadHerores() {
    this._store.dispatch(new GetHeroes());
  }

  getHeroes() {
    this._store.pipe(select(selectHeroList)).subscribe((data) => {
      this.heroes = data;
      this.heroesDataSource = new MatTableDataSource(this.heroes);

      this.setSortForDataSource();
    })
  }

  onFilter() {
    this.onFilterClicked.emit();
  }

  // Private Methods

  setSortForDataSource() {
    if (this.sort) {
      this.heroesDataSource.sort = this.sort;
    }
  }

}
