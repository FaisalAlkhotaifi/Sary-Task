import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from  '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './store/reducers/hero.reducer';
import { appReducer } from './store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './store/effects/hero.effect';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([HeroEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
