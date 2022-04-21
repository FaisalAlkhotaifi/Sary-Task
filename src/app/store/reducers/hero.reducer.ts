import { HeroActions, HeroActionType } from '../actions/hero.action';
import { initialHeroState } from '../state/hero.state';

export function heroReducer(
    state = initialHeroState,
    action: HeroActions
) {
    switch (action.type) {
        case HeroActionType.GetHeroesSuccess: {
            return {
                ...state,
                heroes: action.payload
            }
        }
        default:
            return state;
    }
}