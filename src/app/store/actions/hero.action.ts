import { Action } from '@ngrx/store';
import { Hero } from 'src/app/models/hero.model';

export enum HeroActionType {
    GetHeroes = '[Hero] Get Heroes',
    GetHeroesSuccess = '[Hero] Get Heroes Success',
    // FilterHero = '[Hero] Filter Heroes',
}

export class GetHeroes implements Action {
    readonly type = HeroActionType.GetHeroes;

    constructor(public payload: any = null) {}
}

export class GetHeroesSuccess implements Action {
    readonly type = HeroActionType.GetHeroesSuccess;

    constructor(public payload: Hero[]) {}
}

export type HeroActions = GetHeroes | GetHeroesSuccess;