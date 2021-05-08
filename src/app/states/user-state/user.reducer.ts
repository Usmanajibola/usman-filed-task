import { createReducer, on } from "@ngrx/store";
import { initialState } from "./user.state";
import { userAdd } from './user.actions';


const _userReducer = createReducer(initialState, on(userAdd, (state, action)=> {
    return {
        ...state,
        firstName:action.newUser.firstName,
        lastName:action.newUser.lastName,
        email:action.newUser.email,
        phoneNumber:action.newUser.phoneNumber,
        monthlyAdvertisingBudget:action.newUser.monthlyAdvertisingBudget
    }
}))



export function userReducer(state, action ) {
    return _userReducer(state, action)
}