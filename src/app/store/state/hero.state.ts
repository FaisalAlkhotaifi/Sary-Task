import { Hero } from "src/app/models/hero.model";

export interface HeroState {
    heroes: Hero[];
}

export const initialHeroState: HeroState = {
    heroes: []
};