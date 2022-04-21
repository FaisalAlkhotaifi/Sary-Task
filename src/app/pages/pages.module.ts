import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './home/hero-list/hero-list.component';
import { HeroFilterComponent } from './home/hero-filter/hero-filter.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    HeroListComponent,
    HeroFilterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PagesModule { }
