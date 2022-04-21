import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, of, switchMap } from "rxjs";

import { HeroService } from "src/app/services/static-data/hero.service";
import { GetHeroes, GetHeroesSuccess, HeroActionType } from "../actions/hero.action";
import { AppState } from "../state/app.state";

@Injectable()
export class HeroEffects {
    constructor(
        private _heroService: HeroService,
        private _action: Actions,
    ){}

    getHeroes = createEffect(() =>
        this._action
            .pipe(
                ofType<GetHeroes>(HeroActionType.GetHeroes),
                map((action) => action.payload),
                switchMap((filter) => {
                    if (filter) {
                        return this._heroService.getAllfilteredObservable(filter)
                    }
                    return this._heroService.getAllObservable()
                }),
                switchMap((heroes) => of(new GetHeroesSuccess(heroes)))
            )
    );
}