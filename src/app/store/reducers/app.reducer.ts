import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";

import { AppState } from "../state/app.state";
import { heroReducer } from "./hero.reducer";

export const appReducer: ActionReducerMap<AppState, any> = {
    router: routerReducer,
    hero: heroReducer 
}