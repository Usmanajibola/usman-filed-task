import { createAction, props } from "@ngrx/store";


export const userAdd = createAction('userAdd', props<{newUser}>())