import { RouterReducerState } from "@ngrx/router-store";

import { HeroState, initialHeroState } from "./hero.state";

export interface AppState {
    router?: RouterReducerState;
    hero: HeroState
}

export const initialAppState: AppState = {
    hero: initialHeroState
}

export function getInitialState(): AppState {
    return initialAppState;
}