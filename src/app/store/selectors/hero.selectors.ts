import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { HeroState } from "../state/hero.state";

const heroes = (state: AppState) => state.hero;

export const selectHeroList = createSelector(
    heroes,
    (state: HeroState) => state.heroes
);